import React, { PureComponent } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default class NavText extends PureComponent {
  render() {
    const { navigation } = this.props
    const { text, pr } = navigation.state.params
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          value={text || ''}
          placeholder={pr || ''}
          style={styles.editInput}
          placeholderTextColor="#ccc"
          onChangeText={value =>
            navigation.setParams({
              text: value,
            })}
          underlineColorAndroid="transparent"
          autoFocus
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  editInput: {
    marginTop: 10,
    width: '100%',
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
})
