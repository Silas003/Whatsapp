import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationComponent } from 'react-native-navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Person from '../components/Person'
import Home from './Home'

const Navigation = () => {
    const Stack=createStackNavigator()
  return (
    <View>
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={Home}/>
            <Stack.Screen name='Person' component={Person}/>            
        </Stack.Navigator>
     </NavigationContainer>
    </View>
  )
}

export default Navigation

