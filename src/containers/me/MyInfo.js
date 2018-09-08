import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
  Right,
} from 'native-base'
import { selectImage } from '../../utils/upload'
import { NavigationActions, createAction } from '../../utils'
import { toastShort } from '../../utils/Toast'
import { ListItemKeyValue } from './index'

import { changeAvatar } from '../../services/member'
import Loading from '../../components/Loading'

let toast = null

@connect(({ member }) => ({ member }))
export default class MyInfo extends Component {
  componentWillMount() {
    this.props.dispatch(createAction('member/query')())
  }

  changeHeaderImage = () => {
    const { dispatch } = this.props
    selectImage(res => {
      toast = Loading.show()
      const tkey = `cx${new Date().getTime()}`
      const fname = res.fileName ? res.fileName : `${tkey}.png`
      changeAvatar(
        {
          uri: res.uri,
          type: 'multipart/form-data',
          name: fname,
        },
        sres => {
          Loading.hide(toast)
          if (sres.data.status === 200) {
            dispatch(createAction('member/query')())
          } else {
            toastShort(sres.data.msg)
          }
        }
      )
    })
  }

  changeNickName = () => {
    this.props.navigation.navigate('NavText', {
      title: '昵称',
      text: this.props.member.nickName,
      callback: text => {
        this.props.dispatch(createAction('member/updateNickName')(text))
        return true
      },
    })
  }

  render() {
    const { member } = this.props
    return (
      <Container>
        <Content>
          <List style={styles.list}>
            <ListItem onPress={this.changeHeaderImage}>
              <Body>
                <Text>头像</Text>
              </Body>
              <Right>
                <Thumbnail
                  square
                  size={80}
                  style={{ marginRight: 8 }}
                  source={
                    member.avatar
                      ? {
                          uri: member.avatar,
                        }
                      : require('../../images/logo.png')
                  }
                />
              </Right>
              <Icon name="angle-right" />
            </ListItem>

            <ListItemKeyValue
              onPress={this.changeNickName}
              label="昵称"
              value={member.nickName}
            />

            <ListItem
              onPress={() =>
                this.props.dispatch(
                  NavigationActions.navigate({ routeName: 'QR' })
                )}
            >
              <Body>
                <Text>我的二维码</Text>
              </Body>
              <Right>
                <Icon name="angle-right" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
})
