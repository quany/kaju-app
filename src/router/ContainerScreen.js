import Message from '../containers/message/Message'
import MyInfo from '../containers/me/MyInfo'
import Purchases from '../containers/record/Purchases'
import QR from '../containers/me/QR'
import ShopDetail from '../containers/shop/Detail'

/**
 * 通用设置
 */
const navOptc = {
  headerTitleStyle: {
    alignSelf: 'center',
  },
}

export default {
  Message: {
    screen: Message,
    navigationOptions: {
      ...navOptc,
      title: '我的消息',
    },
  },
  MyInfo: {
    screen: MyInfo,
    navigationOptions: {
      ...navOptc,
      title: '个人信息',
    },
  },
  Purchases: {
    screen: Purchases,
    navigationOptions: {
      ...navOptc,
      title: '消费详情',
    },
  },
  QR: {
    screen: QR,
    navigationOptions: {
      ...navOptc,
      title: '我的二维码',
    },
  },
  ShopDetail: {
    screen: ShopDetail,
    navigationOptions: {
      ...navOptc,
      title: '商户详情',
    },
  },
}
