import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { color } from '../constants/base'
import { images, listStory } from '../constants/image'
import FriendItem from './FriendItem'

const FriendScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.titleText}>Lời mời kết bạn</Text>
            <TouchableOpacity>
                <Ionicons name='search' size={30} />
            </TouchableOpacity>
        </View>
        <View style={styles.hr}></View>
        <FlatList data={listFriendRequest}
            renderItem={({item}) => <FriendItem item={item} />}
        />
    </View>
  )
}

export default FriendScreen
const styles = StyleSheet.create({
    container:{
        padding:5,
        backgroundColor:color.default.bg,
        height:"100%"
    },
    row:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    titleText:{
        fontSize:22,
        fontWeight:'700',

    },
    hr: {
        borderBlockColor: "#ccc",
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10,
      },
})

const listFriendRequest = [
    {
        url:listStory.img0,
        name:"Trang Duong",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img1,
        name:"Ngoc Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img2,
        name:"Hà Vi",
        time_request:"2 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img3,
        name:"Đỗ Bích Ngọc",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
    {
        url:listStory.img4,
        name:"Nguyen Lan Anh",
        time_request:"3 năm",
        friends:{
            img1:images.avt,
            img2:listStory.img3,
            mutual_friends:"7 bạn chung"
        }
    },
]