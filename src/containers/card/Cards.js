import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content } from 'native-base'

import { MCard } from './index'

@connect()
class Cards extends Component {
  render() {
    return (
      <Container>
        <Content>
          <MCard
            detail={() => {}}
            bg="http://oam8i8brm.bkt.clouddn.com/image/index/banner.png"
            logo="http://otqt5krhr.bkt.clouddn.com/alipay.png"
            shopName="时尚部落"
            phone="15201142325"
            cardno="NO. 32455670743458764334"
          />
        </Content>
      </Container>
    )
  }
}

export default Cards
