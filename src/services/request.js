import axios from 'axios'
import { Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Loading from '../components/Loading'
import { toastShort } from '../utils/Toast'

export const initInterceptors = dispatch => {
  let toast
  axios.interceptors.request.use(
    config => {
      if (!toast) toast = Loading.show()
      return config
    },
    error => Promise.reject(error)
  )

  // 添加返回拦截
  axios.interceptors.response.use(
    res => {
      Loading.hide(toast)

      if (res.data.status !== 200) {
        if (res.data.status === 0) {
          Alert.alert(
            '账号异常',
            '您的账号已在其它设备登录，请重新登录',
            [
              {
                text: '确 定',
                onPress: () => {
                  dispatch(NavigationActions.navigate({ routeName: 'Login' }))
                },
              },
            ],
            { cancelable: false }
          )
        } else {
          toastShort(res.data.msg)
        }
        return Promise.reject(res)
      }
      return res
    },
    error => {
      Loading.hide(toast)
      toastShort('网络错误')
      return Promise.reject(error)
    }
  )
}
