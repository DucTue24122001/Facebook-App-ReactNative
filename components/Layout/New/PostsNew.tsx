import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../constants/image";

const PostsNew = () => {
  return (
    <View style={{marginTop:10}}>
      <View style={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"space-around", paddingHorizontal:10 }}>
        <View style={{ position: "relative" }}>
          <Image style={styles.borderImage} source={images.avt} />
          <View style={styles.cumulus}></View>
        </View>
        <TouchableOpacity style={styles.newStatus}>
            <Text>Đăng cập nhật trạng thái</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={images.newImages} />
            <Text>Ảnh</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
};

export default PostsNew;

const styles = StyleSheet.create({
  borderImage: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
  cumulus: {
    width: 15,
    height: 15,
    backgroundColor: "#44e42e",
    borderRadius: 150 / 2,
    position: "absolute",
    right: -1,
    bottom: 2,
    borderColor: "#fff",
    borderWidth: 2,
  },
  newStatus:{
    width:280,
    height:40,
    backgroundColor:"rgb(221 224 228)",
    display:"flex",
    justifyContent:'center',
    alignItems:"flex-start",
    paddingHorizontal:20,
    borderRadius:150/2
  },
  hr: {
    borderBlockColor:'#ccc',
    borderBottomWidth:4,
    marginTop:10,
    marginBottom:10
  },
});
