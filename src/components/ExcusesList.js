import React from 'react'
import { View, StyleSheet } from 'react-native'
import ExcusesCard from './ExcusesCard'

export default class ExcusesList extends React.Component {
    
    renderExcuses = () => {
        return this.props.excuses.map(el => <ExcusesCard key={el.id} excuse={el} /> )
    }

    render() {
        // console.log(this.props.excuses)
        return (
            <View style={style.view} >
                {this.renderExcuses()}
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        paddingTop: 150,
        zIndex: 1
    }
})