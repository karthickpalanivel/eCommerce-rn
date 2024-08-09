/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.appHeader}>
      <View style={styles.appIconContainer}>
        <Image source={require('../assets/apps.png')} style={styles.images} />
      </View>
      <Image style={styles.profilePicture} source={require('../assets/defaultProfileSquare.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  appHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  images: {
    height: 28,
    width: 28,
  },
  appIconContainer: {
    height: 44,
    width: 44,
    backgroundColor: '#fff',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture:{
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});
