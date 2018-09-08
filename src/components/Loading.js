import React, { Component } from 'react'
import { View, Keyboard, Image, Dimensions } from 'react-native'
import RootSiblings from 'react-native-root-siblings'

const DIMENSION = Dimensions.get('window')
const WINDOW_WIDTH = DIMENSION.width

let KEYBOARD_HEIGHT = 0

Keyboard.addListener('keyboardDidChangeFrame', ({ endCoordinates }) => {
  KEYBOARD_HEIGHT = DIMENSION.height - endCoordinates.screenY
})

class Loading extends Component {
  static displayName = 'Loding'

  static show = () =>
    new RootSiblings(
      (
        <View
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            flex: 1,
            top: 0,
            bottom: KEYBOARD_HEIGHT,
            width: WINDOW_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#000',
              opacity: 0.6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require('../images/loading.gif')}
            />
          </View>
        </View>
      )
    )

  static hide = toast => {
    if (toast instanceof RootSiblings) {
      toast.destroy()
    } else {
      console.warn(
        `Loading.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`
      )
    }
  }

  render() {
    return null
  }
}

export { RootSiblings as Manager }
export default Loading
