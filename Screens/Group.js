import { View, Text,Image} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
const Group = () => {
  return (
    <View  style={{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      backgroundColor:'white',
      }}>
    <Text style={{color:'black',
      fontSize:24,
      
      }}>Welcome To Whatsapp</Text>
      
    <Image source={require('../assets/welcome-img.png')} style={{width:'100%',height:'40%'}} resizeMode='contain'>

    </Image>
    </View>
  )
}

export default Group