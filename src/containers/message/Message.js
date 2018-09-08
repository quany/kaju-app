import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base'
import { NavigationActions } from '../../utils'

@connect()
export default class Message extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List style={styles.list}>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: 'http://otqt5krhr.bkt.clouddn.com/alipay.png',
                  }}
                />
              </Left>
              <Body>
                <Text>支付宝</Text>
                <Text note>尊敬的客户，您的问题已经受理</Text>
              </Body>
              <Right>
                <Text note>2017年8月1日</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: 'http://otqt5krhr.bkt.clouddn.com/vip-icon.png',
                  }}
                />
              </Left>
              <Body>
                <Text>消费通知</Text>
                <Text note>尊敬的客户，您的问题已经受理</Text>
              </Body>
              <Right>
                <Text note>2017年8月3日</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: '#fff',
  },
})
