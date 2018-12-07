import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

export default class Homepage extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Winter Excuses</Text>
        <Text style={styles.subtitle}>excuses...for winter...</Text>
        <Link to={'/main'}><Text style={styles.title}>Enter!</Text></Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
    view: {
      padding: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      overflow: 'hidden',
      borderRadius: 20,
    },
  subtitle: {
    color: 'white',
    fontSize: 7,
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  }
})