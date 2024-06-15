import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Auth.Navigator initialRouteName='HomeScreen'> 
      <Auth.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={
          {headerShown:false}
        }
       
      />
    </Auth.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})