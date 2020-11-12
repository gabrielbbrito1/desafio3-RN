import React from 'react'
import {ScrollView, Text, StyleSheet,Image, SafeAreaView} from 'react-native'


export default class PeopleDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "peoples": props.route.params.peoples
        }
    }
    render(){
        return(
            <ScrollView style = {style.scroll}>
            <SafeAreaView>
            <Image style = {style.picture} source = {{uri: this.state.peoples.imagem}} />
            <Text style = {style.text}>Nome e sobrenome:</Text>
            <Text style = {style.text}>{this.state.peoples.nome}</Text>
            <Text style = {style.text}>Genero: </Text>
            <Text style = {style.text}> {this.state.peoples.genero}</Text>
            <Text style = {style.text}>Email:</Text>
            <Text style = {style.text}>{this.state.peoples.email}</Text>
            <Text style = {style.text}>Aniversário:</Text>
            <Text style = {style.text}> {this.state.peoples.aniversario}</Text>
            <Text style = {style.text}>Idade:</Text>
            <Text style = {style.text}>{this.state.peoples.idade}</Text>
            </SafeAreaView>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create(
  {
    scroll: {
      flex: 1,
      backgroundColor: '#000',  
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
