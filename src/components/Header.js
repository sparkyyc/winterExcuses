import React from 'react'
import { Header } from 'react-native-elements'
import { View } from 'react-native'

class Heading extends React.Component {
    render() {
        return (
            <View>
                <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Excuses', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              />
            </View>
        )
    }
}

export default Heading 