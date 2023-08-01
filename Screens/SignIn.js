import { View, Text,Image, TextInput, Button, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback} from 'react-native'
import React, { useState,useContext } from 'react'
import Context from '../context/Context'
import { signIn, signUp } from '../firebase';
import {Ionicons,Feather} from '@expo/vector-icons'


const SignIn = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [mode,setMode]=useState('SignUp');
  const [eye,setEye]=useState(true)
  const {
    theme :{colors}, }=useContext(Context)
  
    async function handlePress(){
      
      if(mode=='SignUp'){
       await signUp(email,password)
      
      }
      if(mode=='SignIn'){
       await signIn(email,password)
      }
   
      
    }
    const handleEye=()=>{
      setEye(!eye)

    }
    
    
        
    
  return (
    
   

    <KeyboardAvoidingView 
    behavior='padding' style={{flex:1}}
    keyboardVerticalOffset={60}>
    <View style={{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      backgroundColor:colors.white,
      }}>



      
      <Text style={{color:colors.foreground,
        fontSize:24,
        marginBottom:20
        }}>Welcome To Whatsapp</Text>
        
      <Image source={require('../assets/welcome-img.png')} style={{width:'100%',height:'40%'}} resizeMode='contain'>

      </Image>
     
      <View style={{marginTop:20,}}>
        <TextInput placeholder='Email'
          value={email}
          onChangeText={setEmail}
          style={{
          borderBottomColor:colors.primary,
          borderBottomWidth:2,
          width:200}}/>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput placeholder='Password'
          value={password}
          onChangeText={setPassword}
            style={{
              borderBottomColor:colors.primary,
              borderBottomWidth:2,
              width:200,
              marginTop:40}}
              secureTextEntry={!eye}/>
              <Feather name='eye' onPress={handleEye} size={23} style={{marginTop:25,marginRight:10}}/>
          </View>
         
              
          <View style={{marginTop:20,backgroundColor:colors.primary}} >
            <Button 
            disabled={!password}
            title={mode== 'SignUp' ? 'Sign Up' : 'LogIn'} 
            color={colors.white} 
            onPress={handlePress}/>
          </View>
          
          
          <TouchableOpacity 
          style={{marginTop:15}}
           onPress={()=>
              mode=='SignUp'? setMode('SignIn') :setMode('SignUp')}>
            <Text style={{color:colors.secondaryText}}>{mode=='SignUp'?'already have an account? Sign in':'Dont have an account? Sign Up'}</Text>
          </TouchableOpacity>
          
      </View>
      
    </View>
    </KeyboardAvoidingView>
    
    
  )
}

export default SignIn  