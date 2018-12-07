import React from 'react'
import { View, Picker, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'


export default class Selector extends React.Component {

    state= {category: 'All' }

    onCategoryChange = (id) => {
        const { onCategoryChange } = this.props

        onCategoryChange(id)
    }

    render() {
        return (
            <View style={style.container}>
                <Picker style={style.selector}
                    selectedValue={this.state.category}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({category: itemValue})
                        this.onCategoryChange(itemIndex)
                        console.log('click')
                        }}
                    >
                    <Picker.Item label="All" value="All" />
                    {this.props.categories.map(category => {
                        return <Picker.Item label={category.name} value={category.name} key={category.id} />
                    })}
                </Picker>
            </View>
        )
    }
}

const style = StyleSheet.create({
    selector: {
        height: 50,
        width: 100,
        marginTop: -50
    }, 
    container: {
        zIndex: 2
    }
})