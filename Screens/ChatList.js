import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {messages} from '../components/chatdata'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const ChatList = () => {
  const navigation=useNavigation()
  return (
    <View>
      <ScrollView contentContainerStyle={{padding:20}}>
      {
      messages.map((item,index)=>{
        return(
          <View key={index} style={{ flex:1,borderBottomWidth:1,borderColor:'gainsboro',paddingTop:2,flexDirection:'row',}}>
              <Image source={item.image}
                  style={{width:70,height:70,borderRadius:60}}/>
              <TouchableOpacity onPress={()=>navigation.navigate('Person',item)}
                  style={{flexDirection:'row',flex:1,justifyContent:'space-between',paddingLeft:9,paddingTop:4}}>
              <View>
                  <Text style={{fontSize:18,fontWeight:'600'}}>{item.name}</Text>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{paddingTop:7,color:'gray',fontSize:15}}>{item.message}</Text>
                      {/* <View style={{borderRadius:70,backgroundColor:'dodgerblue',alignItems:'center',justifyContent:'center',width:20,height:20,marginHorizontal:'25%',marginTop:4}}>
                        <Text style={{color:'white',fontSize:18}}> 1</Text>
                      </View> */}
                    
                  </View> 
                </View>
                <Text style={{color:'dodgerblue',paddingRight:5}}>{item.last_message}</Text>
              </TouchableOpacity>
          </View>
        )
      })
     }

      </ScrollView>
    
    </View>
  )
}

export default ChatList