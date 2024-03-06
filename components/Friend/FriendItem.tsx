import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from '../constants/base';

const FriendItem = ({item}) => {
    
  return (
    <View style={{marginBottom:2}}>
        <View style={styles.row}>
            <Image style={styles.styleImage} source={item.url} />
            <View style={{marginLeft:10}}>
                <View style={styles.justifi}>
                    <Text style={styles.styleName}>{item.name}</Text>
                    <Text style={styles.styletTime}>{item.time_request}</Text>
                </View>
                <View style={{flexDirection:"row", position:"relative", marginBottom:2}}>
                    <Image style={styles.mutual_images} source={item.friends.img1} />
                    <Image style={styles.mutual_images} source={item.friends.img2} />
                    <Text style={{marginLeft:4}}>{item.friends.mutual_friends}</Text>
                </View>
                <View style={styles.justifi}>
                    <TouchableOpacity style={styles.btnAccept}>
                        <Text style={styles.btn_color}>Chấp nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDelete}>
                        <Text style={styles.btn_color}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default FriendItem
const styles = StyleSheet.create({
    row:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    justifi:{
        width:"88%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:2
    },    
    styleImage:{
        width:80,
        height:80,
        borderRadius:150/2,
        resizeMode:"cover"
    },
    styleName:{
        fontWeight:"800",
        fontSize:20

    },
    styletTime:{

    },
    btnAccept:{
        backgroundColor:color.blue,
        width:"49%",
        paddingVertical:12,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:150/2
    },
    btnDelete:{
        backgroundColor:"#ccc",
        width:"49%",
        paddingVertical:12,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:150/2
    },
    btn_color:{
        color:"#fff",
        fontWeight:"700"
    },
    mutual_images:{
        width:20,
        height:20,
        borderRadius:150/2
    }
})