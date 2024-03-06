import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { color } from '../constants/base'
import Navbar from './Navbar/Navbar'

const CommonLayout = ({chidldren, ...props}:any) => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={{paddingBottom: 5}}>
                {chidldren}
            </View>
        </ScrollView>
    </View>
  )
}

export default CommonLayout
const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:color.default.bg
    }
})