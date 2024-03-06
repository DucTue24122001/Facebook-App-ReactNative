import { useRoute } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import FriendScreen from '../components/Friend/FriendScreen';

const Friends = () => {
  return (
    <SafeAreaView>
      <FriendScreen />
    </SafeAreaView>
  )
}

export default Friends