import axios from 'axios'

export const getMemberInfo = async () => {
  const res = await axios.get('/member')
  return res.data.data
}

export const changeNickName = async name => {
  const res = await axios.post(`/member/nickName?nickName=${name}`)
  return res.data.data
}

export const joinShop = async shopId => {
  console.info(shopId)
  const res = await axios.post(`/member/${shopId}`)
  console.info(res)
  return res.data.data
}
export const saveAvatar = async shopId => {
  const res = await axios.post(`/member/${shopId}`)
  return res.data.data
}
export const getCards = async ps => {
  const res = await axios.post('/member/cards', { ...ps })
  return res.data.data
}

/**
 * 上传用户头像
 * @param {*} formData 文件数据对象
 */
export const changeAvatar = async (fileObj, callback) => {
  const data = new FormData()
  data.append('file', fileObj)
  const res = await axios.post('/member/avatar', data)
  callback(res)
}
