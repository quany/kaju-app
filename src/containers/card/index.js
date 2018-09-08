import React from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import { Card, CardItem, Thumbnail, Text, H3 } from 'native-base'

import styles from './styles'

export const MCard = ({ detail, bg, logo, shopName, phone, cardno }) => (
  <TouchableOpacity onPress={detail}>
    <Card>
      <CardItem cardBody>
        <ImageBackground
          source={{
            uri: bg,
          }}
          style={styles.backImage}
        >
          <View style={styles.cview}>
            <Thumbnail
              square
              small
              source={{
                uri: logo,
              }}
            />
            <H3 style={styles.ch}> {shopName}</H3>
          </View>

          <Text style={styles.ctext}>{phone}</Text>
          <Text style={styles.ctext}>{cardno}</Text>
        </ImageBackground>
      </CardItem>
    </Card>
  </TouchableOpacity>
)
