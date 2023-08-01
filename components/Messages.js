import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const{width,height}=Dimensions.get('screen')
const Messages = ({message,time}) => {
  return (
    <View style={{maxWidth:width*0.5,backgroundColor:'dimgray',borderRadius:9,marginLeft:8,height:height*0.085,marginTop:10}}>
      <Text style={{color:'white',justifyContent:'center',fontSize:17}}>{message}</Text>
      <Text style={{color:'white',marginLeft:'80%',marginTop:'15%'}}>{time}</Text>
    </View>
  )
}

export default Messages