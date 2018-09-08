import React, { Component } from 'react'
import { AsyncStorage, View, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { NavigationActions } from '../utils'
import { initInterceptors } from '../services/request'

@connect()
export default class Init extends Component {
  componentWillMount() {
    AsyncStorage.getItem('xtoken', (error, result) => {
      if (result) {
        console.info(result)
        axios.defaults.headers.common['x-auth-token'] = result
        initInterceptors(this.props.dispatch)
        this.props.dispatch(
          NavigationActions.navigate({
            routeName: 'Main',
          })
        )
      } else {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 90, height: 90 }}
          source={require('../images/logo.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
