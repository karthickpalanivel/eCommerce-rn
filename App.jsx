/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Orders from './src/screens/Orders';
import Accounts from './src/screens/Accounts';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',
        }}>
          <Tab.Screen name="HOME" component={Home} />
          <Tab.Screen name="ORDERS" component={Orders} />
          <Tab.Screen name="CART" component={Cart} />
          <Tab.Screen name="ACCOUNT" component={Accounts} />
        </Tab.Navigator>
      </NavigationContainer>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
