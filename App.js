import { StyleSheet, Text, View ,LogBox} from 'react-native';
import {useAssets} from 'expo-asset'
import { useState,useEffect,useContext } from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from './Screens/SignIn';
import ContextWrapper from './context/ContextWrapper'
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Context from './context/Context'
import Person from './components/Person';

const Stack=createStackNavigator()

function App() {
  const [currUser,setCurrUser]=useState(null)
  const [loading,setLoading]=useState(true)
  const {
    theme :{colors}, }=useContext(Context)
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      setLoading(false);
      if (user){
        setCurrUser(user);
      }
    });
    return ()=>unsubscribe();
  },[]);
  if (loading){
    return <Text>Loading...</Text>
  }
  return (
    <NavigationContainer >
      {!currUser ?(
        <Stack.Navigator screenOptions={{headerShown :false}}>
          <Stack.Screen name='signIn' component={SignIn} />
        </Stack.Navigator>
      ):(
        <Stack.Navigator   screenOptions={{headerStyle:{
          backgroundColor:colors.foreground,
          shadowOpacity:0,
          elevation:0
        },
        headerTintColor:colors.white,
        headerShown:false}} >
          {!currUser.displayName &&(
          <Stack.Screen name='profile'
           component={Profile}
            />
          )}
          
          <Stack.Screen name='home' options={{title:'Whatsapp'}} component={Home}  />
          <Stack.Screen name='Person' component={Person}/>
        </Stack.Navigator>
         
         )}
       
    </NavigationContainer>
    
  );
}


function Main(){
  const [assets]=useAssets(
    require('./assets/icon-square.png'),
    require('./assets/chatbg.png'),
    require('./assets/user-icon.png'),
    require('./assets/welcome-img.png'),
    
  )
  if (!assets){
    return <Text>Loading...</Text>
  }

  return <ContextWrapper>
    <App/>
  </ContextWrapper> 
}

export default Main