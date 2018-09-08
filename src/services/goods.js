import axios from 'axios'

export const getGoodsDetail = async id => {
  const res = await axios.get(`/goods/${id}`)
  return res.data.data
}
