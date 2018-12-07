import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';
import HomepageContainer from './src/components/HomepageContainer'

export default class App extends Component {
  render() {
    return (
      <ImageBackground 
          source={require('./craig2.png')}
          style={{ flex: 1,
            width: '100%',
            height: '100%',
            }}
        >
       <View>
        <HomepageContainer />
       </View>
      </ImageBackground >
    )
  }
}