//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import {NavigationContainer}  from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import PeoplePage  from './src/pages/PeoplePage'

const Drawer = createDrawerNavigator();

function App(){
  return(
    <View style = {style.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName = "PeoplePage" >
          <Drawer.Screen name = "Lista de Pessoas" component = {PeoplePage} />
          <Drawer.Screen name = "Detalhe das pessoas" component = {PeopleDetailsPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }
)

export default App;