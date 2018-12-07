import React from 'react'
import { View } from 'react-native'
import ExcusesCard from './ExcusesCard'

class ExcusesList extends React.Component {
    
    renderExcuses = () => {
        return this.props.excuses.map(el => <ExcusesCard key={el.id} excuse={el} /> )
    }

    render() {
        // console.log(this.props.excuses)
        return (
            <View>
                {this.renderExcuses()}
            </View>
        )
    }
}

export default ExcusesList