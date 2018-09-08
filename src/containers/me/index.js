import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ListItem, Text, Body, Left, Right } from 'native-base'

export const ListItemIcon = ({ onPress, label, iconName }) => (
  <ListItem icon onPress={onPress}>
    <Left>
      <Icon name={iconName} size={18} />
    </Left>
    <Body>
      <Text>{label}</Text>
    </Body>
    <Right>
      <Icon name="angle-right" />
    </Right>
  </ListItem>
)

export const ListItemKeyValue = ({ onPress, label, value }) => (
  <ListItem onPress={onPress}>
    <Body>
      <Text>{label}</Text>
    </Body>
    <Right>
      <Text style={{ marginRight: 8, width: 150, textAlign: 'right' }}>
        {value}
      </Text>
    </Right>
    <Icon name="angle-right" />
  </ListItem>
)
