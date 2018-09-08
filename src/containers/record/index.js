import React from 'react'
import { View, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, CardItem, Text, Body, Right, H2 } from 'native-base'

export const RCard = ({ detail, date, money, shopName, play, integral }) => (
  <TouchableOpacity onPress={detail}>
    <Card>
      <CardItem header>
        <Body>
          <Text>消费通知</Text>
          <Text note>{date}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.text}>支付金额:</Text>
          <H2>￥ {money}</H2>
        </Body>
      </CardItem>

      <CardItem>
        <View style={styles.cmain}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>商户名称：{'\t'}</Text>
            <Text>{shopName}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>支付方式：{'\t'}</Text>
            <Text>{play}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>
              积分：{Platform.OS === 'ios' ? '\t\t' : '\t\t\t\t\t\t'}
            </Text>
            <Text>{integral}分</Text>
          </View>
        </View>
      </CardItem>

      <CardItem
        footer
        style={{ borderTopWidth: 0.5, borderTopColor: '#dadada' }}
      >
        <Body>
          <Text>查看详情</Text>
        </Body>
        <Right>
          <Icon name="angle-right" size={24} />
        </Right>
      </CardItem>
    </Card>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  cmain: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  text: {
    color: '#898989',
  },
})
