/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import {Text, View} from 'react-native';
import React from 'react';
import { useState } from 'react';


const [profilePic, setProfilePic] = useState({src: ""});


const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

