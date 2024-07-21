import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../Menu/Menu';
import bill from '../Bill/Bill';
import Tickets from '../Tickets/Tickets';
import Ticketsfood from '../Tickets/Ticketsfood';
import Ticketsmoney from '../Tickets/Ticketsmoney';
import Ticketssucess from '../Tickets/Ticketssucess';
import Listmovie from '../Movie/Listmovie';
import Movie from '../Movie/Movie';
import HelloScreen from '../Helloscreen/Helloscreen';
import Login from '../Loginregister/Login';
import Register from '../Loginregister/Register';
import Person from '../Person/Person';
import Searchmovie from '../Searchmovie/Searchmovie';

const Auth = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Auth.Navigator initialRouteName='HomeScreen'>
      {/* <Auth.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={
          {headerShown:false}
        }
       
      /> */}
      {/* <Auth.Screen
        name='Menu'
        component={Menu}
        options={
          {headerShown:false}
        }
       
      /> */}
      {/* <Auth.Screen
        name='Bill'
        component={bill}
        options={
          {headerShown:false}
        }
       
      /> */}
      {/* <Auth.Screen
        name='Tickets'
        component={Tickets}
        options={
          { headerShown: false }
        }

      /> */}
      {/* <Auth.Screen
        name='Ticketsfodd'
        component={Ticketsfood}
        options={
          { headerShown: false }
        }

      /> */}
      {/* <Auth.Screen
        name='Ticketsmoney'
        component={Ticketsmoney}
        options={
          { headerShown: false }
        }

      /> */}
      {/* <Auth.Screen
        name='Ticketssucess'
        component={Ticketssucess}
        options={
          { headerShown: false }
        }

      /> */}
      {/* <Auth.Screen
        name='Listmovie'
        component={Listmovie}
        options={
          { headerShown: false }
        }

      /> */}
       {/* <Auth.Screen
        name='Movie'
        component={Movie}
        options={
          { headerShown: false }
        }

      /> */}
       {/* <Auth.Screen
        name='Helloscreen'
        component={HelloScreen}
        options={
          { headerShown: false }
        }

      /> */}
      {/* <Auth.Screen
        name='Login'
        component={Login}
        options={
          { headerShown: false }
        }

      /> */}
      {/* <Auth.Screen
        name='Register'
        component={Register}
        options={
          { headerShown: false }
        }

      /> */}
       {/* <Auth.Screen
        name='Person'
        component={Person}
        options={
          { headerShown: false }
        }

      /> */}
       <Auth.Screen
        name='Searchmovie'
        component={Searchmovie}
        options={
          { headerShown: false }
        }

      />
    </Auth.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})