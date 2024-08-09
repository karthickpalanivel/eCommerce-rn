/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Orders from './src/screens/Orders';
import Accounts from './src/screens/Accounts';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',
        }}>
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return <Entypo name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="ORDERS"
          component={Orders}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return <FontAwesome name="reorder" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="CART"
          component={Cart}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return (
                <MaterialCommunityIcons name="cart" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={Accounts}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return <FontAwesome name="user" size={size} color={color} />;
            },
          }}
        />
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

/*
options={{
  tabBarIcon: (size, color) => {
    return <Entypo name={'home'} size={size} color={color} />
  },
}}
 */
