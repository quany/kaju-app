import ImagePicker from 'react-native-image-picker'
import { toastShort } from '../utils/Toast'

const options = {
  title: '选择照片',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    waitUntilSaved: true,
    path: 'images',
  },
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '相机',
  chooseFromLibraryButtonTitle: '相册',
  permissionDenied: {
    title: '需要权限',
    text: '能够用相机拍照，从你的库中选择图片。',
    reTryTitle: '再试',
    okTitle: '我确定',
  },
}

export const selectImage = callback => {
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      toastShort('您取消了上传图片')
    } else if (response.error) {
      toastShort('上传图片出错了')
    } else {
      callback(response)
    }
  })
}
