import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import QRCode from 'react-native-qrcode'

const LWH = Dimensions.get('window').width - 30

@connect()
export default class QR extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QRCode value="聚卡" size={LWH} bgColor="purple" fgColor="white" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
