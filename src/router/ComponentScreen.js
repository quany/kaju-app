import React from 'react'
import NavText from '../components/NavText'

import NavButtom from '../components/NavButtom'

const StackOptions = ({ navigation }) => {
  const headerTitle = navigation.state.params.title
  const headerLeft = (
    <NavButtom
      goto={() => {
        navigation.goBack(navigation.state.key)
      }}
      label="取消"
    />
  )
  const headerRight = (
    <NavButtom
      goto={() => {
        if (navigation.state.params.callback(navigation.state.params.text))
          navigation.goBack(navigation.state.key)
      }}
      label="完成"
    />
  )
  const headerTitleStyle = {
    alignSelf: 'center',
  }
  return { headerTitle, headerLeft, headerRight, headerTitleStyle }
}

export default {
  NavText: { screen: NavText, navigationOptions: StackOptions },
}
