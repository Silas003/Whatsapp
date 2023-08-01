import { View, Text, Image,TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Constants } from 'expo-constants'
import Context from '../context/Context'
import { TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import  {pickImage,askForPerrmission} from '../utils'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

  const [displayName,SetDisplayName]=useState('');
  const [selectedImage,SetSelectedImage]=useState(null);
  const [hasPermission,serHasPermission]=useState(null)
  const navigation =useNavigation();
  
  const handlePress=()=>{
    navigation.navigate("home")
  }
  useEffect(()=>{
    (async ()=>{
      const status=await ImagePicker.requestCameraPermissionsAsync()
      serHasPermission(status.status==='granted');
    })();
    },[]);
  const pickImage=async()=>{
    let result= await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      quality:1
    });
    if (!result.canceled){
      SetSelectedImage(result.uri);
    }

  };
  if (hasPermission==='false'){
    return Alert.alert('Error','No access To Internal Storage')
  }


  const {
    theme :{colors}, }=useContext(Context)
  
  return (
    <React.Fragment>
      <StatusBar style='auto'/>
      <View style={{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        paddingTop:20,
        padding:20
      }}>
        <Text style={{fontSize:22,
          color:colors.foreground
          }}>Profile Info</Text>
        <Text style={{fontSize:14,
          color:colors.text,
          marginTop:20
          }}>Please provide your name and optional photo</Text>
          <TouchableOpacity
            onPress={pickImage}
            style={{marginTop:30,
            borderRadius:100,
            backgroundColor:colors.background,
            width:100,
            height:100,
            alignItems:'center',
            justifyContent:'center'
            }}>
            {!selectedImage ?
             (<MaterialCommunityIcons
               name='camera-plus' 
               color={colors.icongray}
               size={35}/>):
            <Image source={{uri :selectedImage.uri}} style={{width:'100%',height:'100%',borderRadius:120}}/>}
          </TouchableOpacity>
          <TextInput placeholder='Type your name' 
          value={displayName} 
          onChangeText={SetDisplayName}
          style={{borderBottomColor:colors.primary,marginTop:40,borderBottomWidth:2,width:'100%'}}/>
                <KeyboardAvoidingView 
    behavior='padding' style={{flex:1}}
    keyboardVerticalOffset={60}>
        <View style={{
          marginTop:'auto',
          width:80,
          backgroundColor:colors.primary }}>
     
          <Button title='Next' 
          color={colors.white}
           onPress={handlePress}
            disabled={!displayName}/>
            
        </View>
        </KeyboardAvoidingView>
        
        
        </View>
    </React.Fragment>
      
    
  )
}

export default Profile