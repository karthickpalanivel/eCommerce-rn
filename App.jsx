/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Home() {
  return(
    <View>
      <Text>Home</Text>
    </View>
  );
}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HOME" component={Home} />
          <Tab.Screen name="ORDERS" component={Home} />
          <Tab.Screen name="CART" component={Home} />
          <Tab.Screen name="ACCOUNT" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
