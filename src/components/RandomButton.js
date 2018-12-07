import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

class RandomButton extends React.Component {

    onRandomButtonPress = () => {
        const { onRandomButtonPress } = this.props

        onRandomButtonPress()
    }

    render() {
        return (
                <Button
                raised
                icon={{name: 'snowflake-o', type:'font-awesome'}}
                title='Random Excuse' 
                buttonStyle={{ backgroundColor: "#C6E2FF", margin: 5 }}
                onPress={this.onRandomButtonPress}
                />
        )
    }
}
export default RandomButton