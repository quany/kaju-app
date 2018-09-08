import React, { Component } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
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
  Button,
} from 'native-base'
import { NavigationActions, createAction } from '../../utils'
import { ListItemIcon } from './index'

@connect(({ member }) => ({ member }))
class Myself extends Component {
  componentWillMount() {
    this.props.dispatch(createAction('member/query')())
  }

  logout = () => {
    AsyncStorage.removeItem('xtoken', () => {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
    })
  }

  render() {
    console.info(this.props)
    const { member } = this.props
    return (
      <Container>
        <Content>
          <List style={styles.list}>
            <ListItem
              onPress={() =>
                this.props.dispatch(
                  NavigationActions.navigate({ routeName: 'MyInfo' })
                )}
            >
              <Thumbnail
                square
                size={80}
                source={{
                  uri:
                    member.avatar ||
                    'http://otqt5krhr.bkt.clouddn.com/vip-icon.png',
                }}
              />
              <Body>
                <Text>{member.nickName}</Text>

                <Text note>{member.phone}</Text>
              </Body>
              <Icon name="angle-right" />
            </ListItem>

            <ListItemIcon label="消费记录" iconName="list-alt" />

            <ListItemIcon label="钱包" iconName="money" />

            <ListItemIcon
              onPress={() =>
                this.props.dispatch(
                  NavigationActions.navigate({ routeName: 'Message' })
                )}
              label="消息"
              iconName="bell-o"
            />
            <ListItemIcon label="设置" iconName="gear" />
            <ListItemIcon label="关于我们" iconName="smile-o" />
          </List>

          <Button full danger onPress={this.logout} style={styles.button}>
            <Text>退 出</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
  },
})

export default Myself
