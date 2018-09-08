import React from 'react'
import { ListItem, Thumbnail, Text, Body } from 'native-base'

export const ShopItem = ({ onSelect, logo, shopName, address, type, km }) => (
  <ListItem onPress={onSelect}>
    <Thumbnail
      square
      size={80}
      source={logo?require('../../images/logo.png'):{ uri: logo }}
    />
    <Body>
      <Text>{shopName}</Text>
      <Text note>地址：{address}</Text>
      <Text note>{type}</Text>
    </Body>
    <Text> {km}km </Text>
  </ListItem>
)
