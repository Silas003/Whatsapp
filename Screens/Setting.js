import { View, Text,ScrollView,Image,TextInput, } from 'react-native'
import {Ionicons,Feather} from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Fragment } from 'react'

const Setting = () => {
  return (
    <SafeAreaView>
       
      
      <Text style={{color:'black',fontSize:35,fontWeight:'800',marginTop:30,marginLeft:20,}}>Settings</Text>
      <ScrollView>
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
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  </View>
                  
            </View>
            <View style={{backgroundColor:'white',width:'100%',padding:5,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>    
                  <Feather name='user' size={30} color={'white'} style={{backgroundColor:'dodgerblue',borderRadius:60}}/>
                  <Text style={{fontWeight:'500',fontSize:15,color:'black',marginLeft:12}}>Avatar</Text>
            </View>
                  
          
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
               
            <Feather name='star' size={30} color={'white'} style={{backgroundColor:'gold',borderRadius:60}}/>
                  <Text style={{fontWeight:'500',fontSize:15,color:'black',marginLeft:12}}>Starred Messages</Text>  
            </View>
            <View style={{backgroundColor:'white',width:'100%',flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  
            </View>
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  </View>
                  
            </View>
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  </View>
                  
            </View>
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  </View>
                  
            </View>
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  </View>
                  
            </View>
            <View style={{backgroundColor:'white',width:'100%',padding:10,marginVertical:20,marginRight:30,flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/images/23.jpg')}
                  style={{width:50,height:50,borderRadius:60}}/>
                  <View style={{marginLeft:12}}>
                  <Text style={{fontWeight:'600',fontSize:15}}>Nck</Text>
                  <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Damn</Text>
                  </View>
                  
            </View>
            </ScrollView>
     </SafeAreaView>
  )
}

export default Setting