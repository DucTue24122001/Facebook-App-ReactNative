import React, { useMemo } from 'react'
import HomeScreen from '../components/Home/HomeScreen'
import { useRoute } from '@react-navigation/native'

const Home = () => {
  const route=  useRoute()
  return (
    <>
    <HomeScreen />
    </>
  )
}

export default Home