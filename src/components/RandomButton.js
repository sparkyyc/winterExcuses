import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

class RandomButton extends React.Component {

    render() {
        return (
            <View>
                <Button
                raised
                icon={{name: 'snowflake-o', type:'font-awesome'}}
                title='Random Excuse' 
                backgroundColor='black'
                />
            </View>
        )
    }
}

export default RandomButton