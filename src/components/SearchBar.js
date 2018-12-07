import React from 'react'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'

class Search extends React.Component {

    onSearchSubmit = () => {
        // const { onSearchSubmit } = this.props

    }

    render() {
        return (
            <View >
                <SearchBar
                    round
                    // onChangeText={someMethod}
                    // onClearText={someMethod}
                    placeholder='Type Here...' />
            </View>
        )
    }
}

export default Search