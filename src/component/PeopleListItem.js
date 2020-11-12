import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'
import {toUpperFirst} from '../util'

const PeopleListItem = props => {
    const {peoples, onPressItemDetails} = props
    const {name} = peoples.nome
    return(
    <TouchableOpacity onPress={() => {
        onPressItemDetails(peoples)
    }}>
    <View style = {style.line}>
        <Image style = {style.avatar} 
        source = {{uri: peoples.imagem}} />
        <Text style = {style.lineText}
         key = {name}>
        {`${toUpperFirst(name)}`}
        </Text>
    </View>
    </TouchableOpacity>

    )
}

const  style = StyleSheet.create(
    {
        line: {
            height: 60, borderBottomWidth: 2, borderBottomColor: '#000000', alignItems: 'center', flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1, margin: 10, flex: 1, borderRadius: 50, 
        },
        lineText: {
            fontSize: 25, flex: 7, color: "#fff"
        }
    }
)

export default PeopleListItem