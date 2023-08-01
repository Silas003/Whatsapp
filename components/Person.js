import { View, Text,Image, TouchableOpacity,ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Ionicons,Feather} from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import Messages from './Messages'
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { useState } from 'react'
import Input from './input'

const {width,height}=Dimensions.get('screen')
const Person = () => {
    const {params:item}=useRoute()
    const navigation=useNavigation()
    const [text,setText]=useState(null)
    const ms=[1,2,3,24,,235,2,5246]
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
        <View style={{padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{flexDirection:'row',alignItems:'center'}}>
                <Feather name='chevron-left' size={25} color={'dodgerblue'}/>
                <Text style={{fontSize:20, color:'dodgerblue'}}>{87}</Text>
            </TouchableOpacity>

        <View style={{flexDirection:'row',alignItems:'center',marginRight:'15%'}}>
        <Image source={item.image}
            style={{width:45,height:45,borderRadius:60,marginLeft:4}}/>
            <View>
                <Text style={{fontSize:19,fontWeight:'500'}}>{item.name}</Text>
                <Text style={{color:'gray',fontWeight:'300'}}>Tap for more info</Text>
            </View>
            
            </View>   
       
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Feather name='video' size={20} color={'dodgerblue'}/>
                <Feather name='phone' size={20} color={'dodgerblue'} style={{marginLeft:9}}/>
            </View>
        </View>
        
        <View>
        <ImageBackground source={require('../assets/images/24.jpg')}
        style={{width:width,height:height}}> 
       <ScrollView>
        
       <Messages message={item.message} time={item.last_message}/>
            {
                text&&<View style={{flexDirection:'row-reverse',alignItems:'center',}}>
                 <Messages message={text}/>
                </View>
               
            }
                
       </ScrollView>
       <KeyboardAvoidingView 
        behavior='padding' style={{flex:1}}
        keyboardVerticalOffset={-15}>
                <Input message={text} setMessage={setText}/>     
            </KeyboardAvoidingView>  
       
     
        </ImageBackground>
        </View>

        
    </SafeAreaView>
    
  )
}

export default Person