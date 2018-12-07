import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'

const ExcuseCard = (props) => {
    return (
        <Card title="Excuse">
            <View >
            <Text >{props.excuse.excuse}</Text>
            </View>
        </Card>
    )
}

export default ExcuseCard