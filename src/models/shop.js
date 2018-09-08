import { createAction } from '../utils'
import * as shopService from '../services/shop'

export default {
  namespace: 'shop',
  state: {
    detail: {},
    shops: [],
    categorys: [],
    goods: [],
  },
  reducers: {
    shops(state, { payload }) {
      return { shops: { ...payload } }
    },
    categorys(state, { payload }) {
      return { categorys: { ...payload } }
    },
    goods(state, { payload }) {
      return { goods: { ...payload } }
    },
    detail(state, { payload }) {
      return { detail: { ...payload } }
    },
  },
  effects: {
    *getShops({ payload }, { call, put }) {
      const info = yield call(shopService.getShops, payload)
      yield put(createAction('shops')(info))
    },
    *getCategorys({ payload }, { call, put }) {
      const categorys = yield call(shopService.getCategorys, payload)
      yield put(createAction('categorys')(categorys))
    },
    *getGoods({ payload }, { call, put }) {
      const goods = yield call(shopService.getGoodsByShopAndCategory, payload)
      yield put(createAction('goods')(goods))
    },
    *getShopDetail({ payload }, { call, put }) {
      const detail = yield call(shopService.getShopDetail, payload)
      yield put(createAction('detail')(detail))
    },
  },
}
