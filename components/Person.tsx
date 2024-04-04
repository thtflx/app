import { View, Text } from 'react-native'
import React from 'react'

interface PersonProps {
    name?: string
    age?: number
}
const Person = (props: PersonProps) => {
    return (
        <View style={{ backgroundColor: '#f2f2f2', padding: 10, alignItems: 'center', marginBottom: 10, width: 200 }}>
            <Text>{props.name}</Text>
        </View>
    )
}

export default Person