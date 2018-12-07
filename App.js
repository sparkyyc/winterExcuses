import React, {Component} from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomepageContainer from './src/components/HomepageContainer'
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
          <RandomButton onRandomButtonPress={this.onRandomButtonPress} />
          <Selector categories={this.state.categories} onCategoryChange={this.onCategoryChange} />
          <ExcusesList excuses={this.state.excuses} />
        </View>
      )
    }
  }

  export default App

  // render() {
  //   return (
  //     <ImageBackground 
  //         source={require('./craig2.png')}
  //         style={{ flex: 1,
  //           width: '100%',
  //           height: '100%',
  //           }}
  //       >
  //      <View>
  //       <HomepageContainer />
  //      </View>
  //     </ImageBackground >
  //   )
  // }

