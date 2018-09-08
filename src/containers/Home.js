import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content } from 'native-base'

import { NavigationActions } from '../utils'
import { RCard } from './record'

@connect()
class Home extends Component {
  componentDidMount() {
    const { navigation, dispatch } = this.props
    navigation.setParams({
      toqr: () => {
        dispatch(NavigationActions.navigate({ routeName: 'QR' }))
      },
      toMsg: () => {
        dispatch(NavigationActions.navigate({ routeName: 'Message' }))
      },
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <RCard
            detail={() =>
              this.props.dispatch(
                NavigationActions.navigate({ routeName: 'Purchases' })
              )}
            date="7月16日"
            money="100.00"
            shopName="时尚部落"
            play="现金"
            integral="100"
          />
        </Content>
      </Container>
    )
  }
}

export default Home
