import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Listmovie from '../Movie/Listmovie';
import Tickets from '../Tickets/Tickets';
import Ticketssucess from '../Tickets/Ticketssucess';
import HelloScreen from '../Helloscreen/Helloscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Listmovie} options={{ headerShown: false }}  />
      <Tab.Screen name="Settings" component={Ticketssucess} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}