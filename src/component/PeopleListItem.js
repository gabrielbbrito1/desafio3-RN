import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const {name} = people.nome
    return(
    <TouchableOpacity onPress={() => {
        console.log(people)
        onPressItemDetails(people)
        console.log("Função",onPressItemDetails)
    }}>
        <View style = {style.line}>
        <Image style = {style.avatar} 
        source = {{uri: people.imagem}} />
        <Text style = {style.lineText} key = {name}>
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