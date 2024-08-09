/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


// Components
import Header from '../components/Header';
const Home = () => {
  return (
    <LinearGradient colors={['#fdf0f3', '#fffbfc']} style={styles.container}>
      <View>
        <Header/>
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
