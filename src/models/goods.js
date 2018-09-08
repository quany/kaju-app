import { createAction, NavigationActions } from '../utils'
import * as gservice from '../services/goods'

export default {
  namespace: 'goods',
  state: {},
  reducers: {
    info(state, { payload }) {
      return { ...payload }
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
      const info = yield call(gservice.getGoodsDetail, payload)

      yield put(createAction('info')(info))
    },
  },
}
