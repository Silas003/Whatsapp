import { View, Text,ScrollView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {messages} from './chatdata'
import { Dimensions } from 'react-native'
const width=Dimensions.get('screen').width
const Statusdata = () => {
  return (
    <View>
    <ScrollView contentContainerStyle={{padding:20}}>
    {
    messages.map((item,index)=>{
      return(
        <View key={index} style={{ flex:1,borderBottomWidth:1,backgroundColor:'white',width:width,borderColor:'gainsboro',paddingTop:2,flexDirection:'row',}}>
          <Image source={item.image}
          style={{width:70,height:70,borderRadius:60,borderWidth:3,borderColor:'dodgerblue',}}/>
            <TouchableOpacity 
             style={{flex:1,paddingTop:4,marginLeft:12}}>
              <View>
                <Text style={{fontSize:18,fontWeight:'600'}}>{item.name}</Text>
                <Text style={{marginVertical:9,color:'gray'}}>{item.last_message}</Text>
              </View>
            
            </TouchableOpacity>
        </View>
      )
    })
   }

    </ScrollView>
    </View>
  )
}

export default Statusdata