import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../containers/Home'
import Find from '../containers/shop/Find'
import Myself from '../containers/me/Myself'
import Cards from '../containers/card/Cards'
import NavButtom from '../components/NavButtom'

import { tabBarIconSize, tabBarIconFcolor } from '../constant'

/**
 * 首页的头部设定
 * @param {*} param0
 */
const StackOptions = ({ navigation }) => {
  const headerTitle = 'VIP'
  const tabBarLabel = '首页'
  const headerLeft = (
    <NavButtom
      goto={navigation.state.params ? navigation.state.params.toMsg : null}
      label="消息"
    />
  )

  const headerRight = (
    <NavButtom
      goto={navigation.state.params ? navigation.state.params.toqr : null}
      label="特权码"
    />
  )

  const tabBarIcon = ({ focused, tintColor }) => (
    <Icon
      name="list-alt"
      size={tabBarIconSize}
      color={focused ? tintColor : tabBarIconFcolor}
    />
  )
  const headerTitleStyle = navOptc.headerTitleStyle
  return {
    headerTitle,
    tabBarLabel,
    headerLeft,
    headerRight,
    tabBarIcon,
    headerTitleStyle,
  }
}
/**
 * 通用设置
 */
const navOptc = {
  headerLeft: null,
  headerTitleStyle: {
    alignSelf: 'center',
  },
}

const HomeNavigator = TabNavigator(
  {
    Home: { screen: Home, navigationOptions: StackOptions },
    Cards: {
      screen: Cards,
      navigationOptions: {
        title: '我的会员卡',
        tabBarLabel: 'VIP',
        ...navOptc,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="credit-card"
            size={tabBarIconSize}
            color={focused ? tintColor : tabBarIconFcolor}
          />
        ),
      },
    },
    Find: {
      screen: Find,
      navigationOptions: {
        title: '发 现',
        tabBarLabel: '发现',
        ...navOptc,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="compass"
            size={tabBarIconSize}
            color={focused ? tintColor : tabBarIconFcolor}
          />
        ),
      },
    },
    Myself: {
      screen: Myself,
      navigationOptions: {
        title: '我的',
        tabBarLabel: '我的',
        ...navOptc,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="user-o"
            size={tabBarIconSize}
            color={focused ? tintColor : tabBarIconFcolor}
          />
        ),
      },
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
  }
)

export default HomeNavigator
