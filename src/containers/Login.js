import React from 'react'
import { Image, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  Container,
  Content,
  Item,
  Button,
  Text,
  Input,
  Icon,
} from 'native-base'
import { Buffer } from 'buffer'
import { initInterceptors } from '../services/request'
import { NavigationActions } from '../utils'
import { toastShort } from '../utils/Toast'
import Loading from '../components/Loading'

let toast = null

@connect()
export default class Login extends React.Component {
  state = {
    hasError: false,
    codeText: '获取验证码',
    enableSendCode: true,
    enableLogin: true,
    value: '',
    code: '',
  }

  onChange = value => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      })
    } else {
      this.setState({
        hasError: false,
        enableSendCode: false,
      })
    }
    this.setState({
      value,
    })
  }

  // 发送验证码
  sendCode = () => {
    toast = Loading.show()
    this.setState(
      {
        enableSendCode: true,
      },
      () => {
        fetch(
          `${axios.defaults
            .baseURL}/login/code?phone=${this.state.value.replace(/\s/g, '')}`,
          {
            method: 'POST',
          }
        )
          .then(response => response.json())
          .then(o => {
            Loading.hide(toast)
            if (o.status === 200) {
              this.setState({
                enableLogin: false,
                enableSendCode: false,
              })
              let ms = 60
              const timer = setInterval(() => {
                if (ms === 0) {
                  this.setState(
                    {
                      enableSendCode: false,
                      codeText: '获取验证码',
                    },
                    () => clearInterval(timer)
                  )
                } else {
                  this.setState({
                    codeText: `${ms}秒后再获取`,
                  })
                }
                ms -= 1
              }, 1000)
            }
          })
      }
    )
  }

  // 登录处理
  loging = () => {
    toast = Loading.show()
    const xheader = new Headers({
      Authorization: `Basic ${new Buffer(
        `${this.state.value}:${this.state.code}`
      ).toString('base64')}`,
    })
    fetch(`${axios.defaults.baseURL}/login/member`, {
      headers: xheader,
      method: 'POST',
    }).then(res => {
      Loading.hide(toast)
      if (res.status === 200) {
        // 初始化登录
        axios.defaults.headers.common['x-auth-token'] = res.headers.get(
          'x-auth-token'
        )
        initInterceptors(this.props.dispatch)
        AsyncStorage.setItem(
          'xtoken',
          res.headers.get('x-auth-token')
        ).then(() =>
          this.props.dispatch(
            NavigationActions.navigate({
              routeName: 'Main',
            })
          )
        )
      } else {
        toastShort('账户或验证码错误')
      }
    })
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Content style={{ padding: 8 }}>
          <Image
            style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
              marginTop: 50,
            }}
            source={require('../images/logo.png')}
          />

          <Item
            success={this.state.value === '' ? false : !this.state.hasError}
            error={this.state.value === '' ? false : this.state.hasError}
          >
            <Input
              keyboardType="phone-pad"
              placeholder="请输入手机号"
              onChangeText={this.onChange}
              value={this.state.value}
            />
            {this.state.value === '' ? (
              <Text />
            ) : (
              <Icon
                name={this.state.hasError ? 'close-circle' : 'checkmark-circle'}
              />
            )}
          </Item>

          <Item disabled={this.state.enableSendCode}>
            <Input
              keyboardType="numeric"
              onChangeText={code => this.setState({ code })}
              placeholder="请输入验证码"
            />
            <Button
              disabled={this.state.enableSendCode}
              small
              bordered
              onPress={this.sendCode}
              style={{ alignSelf: 'center' }}
            >
              <Text>{this.state.codeText}</Text>
            </Button>
          </Item>

          <Button
            disabled={this.state.enableLogin}
            block
            onPress={this.loging}
            style={{ marginTop: 15 }}
          >
            <Text>登 录</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
