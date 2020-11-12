import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {people, onPressItem} = props   
    const renderItem = ({item}) =>{
        return (
            <PeopleListItem 
            key = {item.nome.peoples}
            peoples = {item}
            onPressItemDetails = {onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Perfis
                </Text>
            </View>
        )
    }

    return(
        <View style = {style.container}>
            <SafeAreaView>
                <FlatList
                    data={people}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.nome.peoples}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}
const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#e67300', 
        },
        headerStyle: {
             backgroundColor: "#fff", justifyContent: "center", alignItems: 'center'
        },
        titleStyle: {
            color: '#000', fontSize: 25, fontWeight: "bold", height: 50, justifyContent: "center", alignItems: "center", marginTop: 15
        }
    }
)
export default PeopleList