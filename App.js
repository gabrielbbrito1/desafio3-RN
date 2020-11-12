//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import {NavigationContainer}  from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import PeoplePage  from './src/pages/PeoplePage'

const Stack = createStackNavigator();

function App(){
  return(
    <View style = {style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Lista de Pessoas" >
          <Stack.Screen name = "Lista de Pessoas" component = {PeoplePage} />
          <Stack.Screen name = "Detalhe das pessoas" component = {PeopleDetailsPage} />
        </Stack.Navigator>
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