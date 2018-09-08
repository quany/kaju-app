import React from 'react'
import { Text, Button } from 'native-base'

const NavButtom = ({ goto, label }) => (
  <Button transparent dark onPress={goto}>
    <Text>{label}</Text>
  </Button>
)
export default NavButtom
