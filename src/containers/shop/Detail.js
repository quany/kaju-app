import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, H1, Text, Button } from 'native-base'

import Communications from 'react-native-communications'

import { createAction } from '../../utils'

@connect(({ shop }) => ({ shop }))
export default class ShopDetail extends Component {
  componentWillMount() {
    this.props.dispatch(
      createAction('shop/getShopDetail')(
        this.props.navigation.state.params.shopId
      )
    )
  }

  joinShop = () => {
    this.props.dispatch(
      createAction('member/joinShop')(this.props.shop.detail.id)
    )
  }

  render() {
    const { detail } = this.props.shop
    if (!detail) return <Container />
    return (
      <Container>
        <Content>
          <H1>{detail.name}</H1>
          <Text>{detail.phone}</Text>
          <TouchableOpacity
            onPress={() => Communications.phonecall(detail.phone, true)}
          >
            <Icon name="phone" size={24} />
          </TouchableOpacity>
          <Text>地址：{detail.address}</Text>

          <Button onPress={this.joinShop}>
            <Text>加入会员</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
