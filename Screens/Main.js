import { View, Text ,useContext,Di} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Context from '../context/Context'
import {Ionicons,Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import ChatList from './ChatList'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
const Main = () => {

  const [person,setPerson]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13])
  return (
      <SafeAreaView style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:5}}>
            <TouchableOpacity >
                  <Text style={{
                    color:'dodgerblue',
                    marginTop:10,
                    fontSize:20,
                    marginLeft:15}}>Edit</Text>
                    </TouchableOpacity>
              <View style={{
                flexDirection:'row',
                marginRight:'4%'
                }}>
              <Ionicons
                name='camera-outline'
                  color={'dodgerblue'} 
                  size={25} style={{
                  marginTop:10,
                  marginLeft:12,
                  alignSelf:'flex-end'
                }}/>
              <Feather
              name='edit'
                color={'dodgerblue'} 
                size={20} style={{
                marginTop:10,
                marginLeft:12,
                
              }}/>
          </View>
        
  
        </View>
        <ScrollView>
        <Text style={{fontSize:34,fontWeight:'bold',marginLeft:18}}>
          Chats
          </Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'80%',backgroundColor:'gainsboro',marginLeft:20, padding:4,marginTop:10,borderRadius:12,flexDirection:'row',alignItems:'center'}}>
                <Ionicons  name='search' size={20} color={'gray'} />
                <TextInput title='Search' placeholder={'Search'}
                      fontSize={18}
                      
                      style={{
                        borderRadius:9,
                        borderWidth:1,
                        borderColor:'gainsboro',
                        width:'80%',
                        height:33,
                        backgroundColor:'gainsboro',
            
                        marginLeft:10,
         
                            }}/>
            </View>
                    <Ionicons
                name='filter'
                  color={'dodgerblue'} 
                  size={25} style={{
                  marginTop:17,
                  marginRight:12,
                  alignItems:'center'
                }}/>
            </View> 
            <View style={{
          flexDirection:'row',
            paddingTop:20,
          justifyContent:'space-between',
          borderBottomWidth:1,
          borderColor:'gainsboro'}}>
        <TouchableOpacity >
          <Text style={{
          color:'dodgerblue',
          fontSize:20,
          marginLeft:15}}>Broadcasting Lists</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{
          color:'dodgerblue', 
          fontSize:20,
          marginRight:15}}>New Group</Text>
          </TouchableOpacity>
        </View>
        <View >
          
                  
            <ChatList/>
                  
            
        </View> 
        </ScrollView>
      </SafeAreaView>
  )
  }
export default Main