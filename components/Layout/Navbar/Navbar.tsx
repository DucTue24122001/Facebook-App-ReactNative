import React from 'react'
import { View } from 'react-native'
import NavTop from './NavTop'
import NavBottom from './NavBottom'

const Navbar = () => {
  return (
    <>
        <View>
            <NavTop />
            <NavBottom />
        </View>
    </>
  )
}

export default Navbar