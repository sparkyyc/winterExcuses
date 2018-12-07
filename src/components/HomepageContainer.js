import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Homepage from './Homepage'

export default class HomepageContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Homepage />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
})