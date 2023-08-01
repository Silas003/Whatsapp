import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import {Ionicons,Feather} from '@expo/vector-icons'
import { useState } from 'react'


const {width,height}=Dimensions.get('screen')
const Input = ({message,setMessage}) => {
    const [text,setText]=useState(null)
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',padding:8,alignItems:'center'}} >
        <Feather name='plus' size={20} color={'dodgerblue'}/>
        <View style={{width:'70%',backgroundColor:'gainsboro',borderRadius:'12',padding:10}}>
            <TextInput 
            title='text'
            value={message} onChangeText={setMessage}
            style={{padding:3}}></TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Feather name='camera' size={20} color={'dodgerblue'}/>
                <Feather name='mic' size={20} color={'dodgerblue'}/>
        </View>
       
    </View>    
  )
}

export default Input