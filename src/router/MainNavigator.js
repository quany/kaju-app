import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import Login from '../containers/Login'
import Init from '../containers/Init'

import ContainerScreen from './ContainerScreen'
import ComponentScreen from './ComponentScreen'

const NoHeader = {
  navigationOptions: {
    header: null,
  },
}

const MainNavigator = StackNavigator(
  {
    // 一级页面，拥有一定的业务逻辑
    Init: { screen: Init, ...NoHeader }, // 初始页，数据初始加载
    Login: { screen: Login, ...NoHeader },
    Main: { screen: HomeNavigator }, // 主页，各个tab

    // 功能模块页面
    ...ContainerScreen,

    // 组件页面，与业务数据无关，不牵涉业务
    ...ComponentScreen,
  },
  {
    mode: 'modal',
    headerStyle: {
      elevation: 0,
    },
    headerTitleStyle: {
      alignSelf: 'center',
    },
    lazy: true, // 懒加载
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export default MainNavigator
