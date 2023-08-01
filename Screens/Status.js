import { View, Text, SafeAreaView,TextInput,Image } from 'react-native'
import React from 'react'
import {Ionicons,Feather} from '@expo/vector-icons'
import ChatList from './ChatList'
import Statusdata from '../components/Statusdata'
import { ScrollView } from 'react-native'

const Status = () => {
  return (
    <SafeAreaView >
      
      <Text style={{color:'dodgerblue',fontSize:18,fontWeight:'500',marginLeft:20,marginTop:15,marginBottom:14}}>Privacy</Text>
      <ScrollView>
      <Text style={{color:'black',fontSize:30,fontWeight:'800',marginTop:15,marginLeft:20,}}>Status</Text>
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
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:40,marginRight:30,flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>My Status</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>3h ago</Text>
                  </View>
                </View>
              
                  <View style={{flexDirection:'row',marginRight:12}}>
                    <Feather name='camera' size={20} color={'dodgerblue'} style={{marginRight:12}}/>
                    <Feather name='edit-2'  size={20} color={'dodgerblue'}/>
                  </View>
                  
            </View>
            <Text style={{color:'gray',marginHorizontal:10}}>RECENT UPDATE</Text>
            <Statusdata/>
            </ScrollView>
    </SafeAreaView>
  )
}

export default Status