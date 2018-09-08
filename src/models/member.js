import { createAction } from '../utils'
import * as mservice from '../services/member'

export default {
  namespace: 'member',
  state: {},
  reducers: {
    info(state, { payload }) {
      return { ...payload }
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
      const info = yield call(mservice.getMemberInfo, payload)
      yield put(createAction('info')(info))
    },
    *updateNickName({ payload }, { call, put }) {
      console.info(payload)
      const info = yield call(mservice.changeNickName, payload)
      yield put(createAction('info')(info))
    },
    *getCards({ payload }, { call, put }) {
      const info = yield call(mservice.getCards, payload)
      yield put(createAction('info')(info))
    },
    *joinShop({ payload }, { call, put }) {
      console.info(payload)
      const rs = yield call(mservice.joinShop, payload)
      yield put(createAction('info')(rs))
    },
  },
}
