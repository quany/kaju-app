import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Text, H3 } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

@connect()
export default class Purchases extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.header}>
            <H3>时尚部落</H3>
            <Text style={{ fontSize: 10, color: '#dadada' }}>
              ---------------------------------
            </Text>
          </View>

          <View style={{ marginLeft: 8 }}>
            <Text>订单编号：32498032775230840</Text>
            <Text>订单时间：2017-08-01 11:21:22</Text>
          </View>

          <Grid style={styles.list}>
            <Row style={styles.rows}>
              <Col style={styles.ltd}>
                <Text>名称</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text>数量</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text>单价</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text>统计</Text>
              </Col>
            </Row>
            <Row style={styles.rows}>
              <Col style={styles.ltd}>
                <Text>牛奶</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text>1</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text>1</Text>
              </Col>
              <Col style={styles.ptd}>
                <Text>10.00</Text>
              </Col>
            </Row>
          </Grid>

          <Grid style={styles.list}>
            <Row style={styles.rows}>
              <Col style={styles.ltd}>
                <Text>总计</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text />
              </Col>
              <Col style={styles.ltd}>
                <Text />
              </Col>
              <Col style={styles.ptd}>
                <Text>11.00</Text>
              </Col>
            </Row>
            <Row style={styles.rows}>
              <Col style={styles.ltd}>
                <Text>优惠</Text>
              </Col>
              <Col style={styles.ltd}>
                <Text />
              </Col>
              <Col style={styles.ltd}>
                <Text />
              </Col>
              <Col style={styles.ptd}>
                <Text>3.00</Text>
              </Col>
            </Row>
          </Grid>

          <View style={{ marginLeft: 8, marginTop: 10 }}>
            <Text>支付方式：现金</Text>
            <Text>地 址：北京市朝阳区朝阳公园店</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
  },
  list: {
    marginHorizontal: 8,
    marginTop: 10,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#dadada',
  },
  ltd: {
    borderRightWidth: 0.5,
    borderColor: '#dadada',
    padding: 8,
    alignItems: 'center',
  },
  rows: {
    borderBottomWidth: 0.5,
    borderColor: '#dadada',
  },
  ptd: {
    borderRightWidth: 0.5,
    borderColor: '#dadada',
    padding: 8,
    alignItems: 'flex-end',
  },
})
