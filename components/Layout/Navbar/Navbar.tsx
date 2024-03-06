import React from 'react'
import { View } from 'react-native'
import NavTop from './NavTop'
import NavBottom from './NavBottom'

const Navbar = ({currentRouter}) => {
  return (
    <>
        <View>
            <NavTop />
            <NavBottom currentRouter={currentRouter} />
        </View>
    </>
  )
}

export default Navbar