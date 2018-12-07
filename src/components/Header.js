import React from 'react'
import { Header } from 'react-native-elements'
import { View } from 'react-native'

class Heading extends React.Component {

    onRefreshPress = () => {
        const { onRefreshPress } = this.props

        onRefreshPress()
    }

    render() {
        return (
            <View>
                <Header
                centerComponent={{ text: 'Excuses', style: { color: '#fff' } }}
                rightComponent={{ icon: 'refresh', color: '#fff', onPress:this.onRefreshPress }}
              />
            </View>
        )
    }
}

export default Heading 