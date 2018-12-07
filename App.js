import React, { Component } from 'react';
import { View } from 'react-native';
import Selector from './src/components/CategorySelector'
import ExcusesList from './src/components/ExcusesList'
import Heading from './src/components/Header'
import RandomButton from './src/components/RandomButton'
import axios from 'axios'

class App extends Component {
  state = { excuses: [], allExcuses: [], categories: [] }

    async componentDidMount() {
      await this.getAllExcuses()
      await this.getAllCategories()
    }

    getAllExcuses = async () => {
      const response = await axios.get('http://winter-excuses.herokuapp.com/excuses')
        
      this.setState({ excuses: response.data, allExcuses: response.data })
    }

    getAllCategories = async () => {
      const response = await axios.get('http://winter-excuses.herokuapp.com/categories')

      this.setState({ categories: response.data })
    }

    onRandomButtonPress = async () => {
      const response = await axios.get('http://winter-excuses.herokuapp.com/excuses/random')

      this.setState({ excuses: response.data })
    }

    onRefreshPress = () => {
      
      this.setState({excuses: this.state.allExcuses })
    }

    onCategoryChange = async (id) => {
      if (id === 0) {
        this.setState({ excuses: this.state.allExcuses })
      } else {
        const response = await axios.get(`http://winter-excuses.herokuapp.com/categories/${id}`)

        this.setState({excuses: response.data })
      }
    }


  render() {
    return (
      <View >
        <Heading onRefreshPress={this.onRefreshPress} />
        <Selector categories={this.state.categories} onCategoryChange={this.onCategoryChange} />
        <RandomButton onRandomButtonPress={this.onRandomButtonPress} />
        <View>
          <ExcusesList excuses={this.state.excuses} />
        </View>
      </View>
    )
  }
}

export default App