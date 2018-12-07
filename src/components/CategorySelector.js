import React from 'react'
import { View, Picker } from 'react-native'
import { SearchBar } from 'react-native-elements'


class Selector extends React.Component {

    state= {category: 'All' }

    onCategoryChange = (id) => {
        const { onCategoryChange } = this.props

        onCategoryChange(id)
    }

    render() {
        console.log(this.props.categories)
        return (
            <View>
                <Picker
                    selectedValue={this.state.category}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({category: itemValue})
                        this.onCategoryChange(itemIndex)
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

export default Selector