import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, List, Item, Input } from 'native-base'
import { ShopItem } from './index'
import { NavigationActions, createAction } from '../../utils'
import { toastShort } from '../../utils/Toast'

@connect(({ shop }) => ({ shop }))
class Find extends Component {
  static watchID = null

  componentWillMount() {
    const { dispatch } = this.props
    navigator.geolocation.getCurrentPosition(
      position => {
        console.info(position)
        const oxy = {
          page: 1,
          pageSize: 10,
          x: position.coords.longitude,
          y: position.coords.latitude,
        }
        this.setState(
          {
            ...oxy,
          },
          () =>
            dispatch(
              createAction('shop/getShops')({
                ...oxy,
              })
            )
        )
      },
      error => toastShort(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )

    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        page: 1,
        pageSize: 10,
        x: position.coords.longitude,
        y: position.coords.latitude,
      })
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  searchByName = text => {
    this.setState(
      {
        name: text,
      },
      () =>
        this.props.dispatch(createAction('shop/getShops')({ ...this.state }))
    )
  }

  toDetail = shopId => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'ShopDetail' }, { shopId })
    )
  }

  render() {
    const { dispatch } = this.props
    const { shops } = this.props.shop
    return (
      <Container>
        <Content style={{ backgroundColor: '#fff' }}>
          <Item rounded style={{ margin: 5, height: 30 }}>
            <Icon
              name="search"
              size={16}
              style={{ marginLeft: 8, marginBottom: 2 }}
            />
            <Input placeholder="搜索附近的商铺" onChangeText={this.searchByName} />
          </Item>
          <List style={styles.list}>
            {shops
              ? Object.values(shops).map(o => (
                  <ShopItem
                    key={o.id}
                    onSelect={() =>
                      dispatch(
                        NavigationActions.navigate({
                          routeName: 'ShopDetail',
                          params: { shopId: o.id },
                        })
                      )}
                    shopName={o.name}
                    address={o.address}
                    type="理发店"
                    km={o.distance.toFixed(2)}
                  />
                ))
              : null}
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#dadada',
  },
})

export default Find
