import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

class RandomButton extends React.Component {

    onRandomButtonPress = () => {
        const { onRandomButtonPress } = this.props

        onRandomButtonPress()
    }

    render() {
        return (
            <View>
                <Button
                raised
                icon={{name: 'snowflake-o', type:'font-awesome'}}
                title='Random Excuse' 
                backgroundColor='black'
                onPress={this.onRandomButtonPress}
                />
            </View>
        )
    }
}

export default RandomButton