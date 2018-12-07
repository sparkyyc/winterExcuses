import React, { Component } from 'react';
import { View } from 'react-native';
import Search from './src/components/SearchBar'
import ExcusesList from './src/components/ExcusesList'
import Heading from './src/components/Header'
import RandomButton from './src/components/RandomButton'

export default class App extends Component {
  render() {
    return (
      <View >
        <Heading />
        <Search />
        <RandomButton />
        <ExcusesList />
      </View>
    )
  }
}