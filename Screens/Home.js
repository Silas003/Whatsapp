import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Call from './Call'
import Chats from './Chats'
import Group from './Group'
import Status from './Status'
import Context from '../context/Context';
import Setting from './Setting';
import {Ionicons,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons'
const Home = () => {
  const {
    theme:{colors}}=useContext(Context)
  //const Bottom =createMaterialBottomTabNavigator()
  const Tab=createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      activeColor="dodgerblue"
      labelStyle={{ fontSize: 15 }}
      barStyle={{backgroundColor:colors.white}}
      screenOptions={{headerShown:false}}
       >
      
      
      <Tab.Screen 
      name='Status'
       component={Status}
       options={{
        tabBarLabel: 'Status',
        tabBarIcon: ({ color }) => (
          <Ionicons name="sync-circle-outline" color={color} size={25} /> 
        ),
      }}/>

      <Tab.Screen 
      name='Call' component={Call}
      options={{
        tabBarLabel: 'Call',
        tabBarIcon: ({ color }) => (
          <Ionicons name="call-outline" color={color} size={25} /> 
        ),
      }}/>
      <Tab.Screen 
      name='Group' 
      component={Group}
      options={{
        tabBarLabel: 'Communities',
        
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group-outline" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen
       name='Chats' 
       component={Chats}
       options={{
        tabBarLabel: 'Chats',
        tabBarBadge:29,
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="comments" size={25} />
        ),
      }}/>
      <Tab.Screen 
      name='Setting' 
      component={Setting}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings-outline" color={color} size={25} /> 
        ),
      }}/>
    </Tab.Navigator>
  )
}
export default Home