import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type ItemProps = {
    url:string,
    name:string,
    stt:number
}

const StoryItem = ({item}) => {
  return (
    <View >
        <TouchableOpacity style={styles.boxStr}>
          <Text style={styles.Position}>{item.stt}</Text>
          <Image style={styles.styleImg} source={item.url} />
          <Text style={styles.StrName}>{item.name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default StoryItem

const styles = StyleSheet.create({
   
    boxStr: {
        position: "relative",
        width: 100,
        height: 160,
        borderWidth: 1.5,
        borderColor: "#ccc",
        borderRadius: 150 / 15,
        overflow: "hidden",
        marginRight:5
      },
      styleImg:{
        width:"auto",
        height:160,
        resizeMode:"cover"
      },
      StrName:{
        position:"absolute",
        color:"#fff",
        fontWeight:"700",
        bottom:5,
        left:5
      },
      Position:{
        position:"absolute",
        top:5,
        left:5,
        zIndex:1,
        color:"#fff",
        fontWeight:"700",
        backgroundColor:"#0866ff",
        width:20,
        textAlign:"center",
        borderRadius:150/15
      }
})