import React from 'react'
import {ScrollView, Text, StyleSheet,Image, SafeAreaView} from 'react-native'

export default class PeopleDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people
        }
    }
    render(){
      console.log(this.state.people)
        return(
            <ScrollView style = {style.scroll}>
            <SafeAreaView>
            <Image style = {style.picture} source = {{uri: this.state.people.imagem}} />
            <Text style = {style.text}>Nome e sobrenome:</Text>
            <Text style = {style.text}>{this.state.people.nome.name}</Text>
            <Text style = {style.text}>genero: </Text>
            <Text style = {style.text}> {this.state.people.genero}</Text>
            <Text style = {style.text}>email:</Text>
            <Text style = {style.text}>{this.state.people.email}</Text>
            <Text style = {style.text}>aniversario:</Text>
            <Text style = {style.text}> {this.state.people.aniversario}</Text>
            <Text style = {style.text}>idade:</Text>
            <Text style = {style.text}>{this.state.people.idade}</Text>
            </SafeAreaView>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create(
  {
    scroll: {
      flex: 1,
      backgroundColor: '#FFF',  
    },

    line: {
      height: 100, borderBottomWidth: 1, borderBottomColor: '#000', alignItems: 'center', flexDirection: 'row'
    },

    text: {
      fontFamily: "Arial", fontSize: 20, textAlign: "center", display: "flex" ,flexWrap: 'wrap' 
    },

    picture: {
      aspectRatio: 1, margin: 40, height: 128, width: 128
    }

  }
)
