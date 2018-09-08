import React from 'react'
import axios from 'axios'
import dva from './utils/dva'
import Router from './router'
import modelso from './models'

// 1.初始化参数:服务端地址，会话令牌，是否是第一次打开App
axios.defaults.baseURL = 'http://47.93.123.44:12011'

const app = dva({
  initialState: {},
  models: modelso,
  onError(e) {
    console.log('错误：', e)
  },
})

const App = app.start(<Router />)

export default App
