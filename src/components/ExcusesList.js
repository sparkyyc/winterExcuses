import React from 'react'
import { View } from 'react-native'
import axios from 'axios'
import ExcusesCard from './ExcusesCard'

class ExcusesList extends React.Component {
    state = { excuses: [{text: 'Grandma got run over by a reindeer', id: 1}, {text: 'Grandma got cold', id: 2}, {text: "I'm from florida, soooo you know...", id: 3}] }

    async componentDidMount() {
        const response = await axios.get('http://winter-excuses.herokuapp.com/excuses')
        console.log(response.data)
        this.setState({excuses: response.data})
    }

    renderExcuses = () => {
        return this.state.excuses.map(el => <ExcusesCard key={el.id} excuse={el} /> )
    }

    render() {
        return (
            <View>
                {this.renderExcuses()}
            </View>
        )
    }
}

export default ExcusesList