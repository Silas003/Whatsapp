import { View, Text ,useContext,Di} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Context from '../context/Context'
import {Ionicons,Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import ChatList from './ChatList'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Person from '../components/Person'
import Main from './Main'
import Navigation from './Navigation'

const Chats = () => {
  const Stack=createStackNavigator()
  return (
    <Main/>
  )
  }
export default Chats