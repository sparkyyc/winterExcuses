import React from 'react'
import { Header } from 'react-native-elements'
import { View } from 'react-native'

export default class Heading extends React.Component {

    onRefreshPress = () => {
        const { onRefreshPress } = this.props

        onRefreshPress()
    }

    render() {
        return (
                <Header
                centerComponent={{ text: 'Excuses', style: { color: '#fff' } }}
                rightComponent={{ icon: 'refresh', color: '#fff', onPress:this.onRefreshPress }}
                backgroundColor="#95AEC7"
              />
        )
    }
}