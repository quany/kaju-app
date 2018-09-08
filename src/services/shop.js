import axios from 'axios'

export const getShops = async params => {
  const res = await axios.get('/shop/shops', {
    params: params || { page: 1, pageSize: 10 },
  })
  return res.data.data.elements
}

export const getCategorys = async shopId => {
  const res = await axios.get(`/shop/${shopId}/category`)
  return res.data.data
}

export const getGoodsByShopAndCategory = async params => {
  const res = await axios.get(`/shop/${params.id}/category/${params.cid}/goods`)
  return res.data.data
}

export const getShopDetail = async shopId => {
  const res = await axios.get(`/shop/${shopId}`)
  return res.data.data
}
