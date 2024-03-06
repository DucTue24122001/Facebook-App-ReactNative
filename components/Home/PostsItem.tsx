import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PostsItem = ({ post }) => {

  return (
    <>
      <View style={styles.postBox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image style={styles.avt} source={post.urlPage} />
          <View>
            <Text style={{ fontWeight: "900", fontSize: 16 }}>
              {post.namePage}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{post.time} giờ · </Text>
              <FontAwesome name="globe" size={15} />
            </View>
          </View>
        </View>
        <Text style={{ marginTop: 5 }}>{post.des}</Text>
        <Image style={styles.post} source={post.urlPost} />

        <View style={{ flexDirection: "row", marginTop:10, justifyContent:"space-between" }}>
          <View style={styles.boxIcon}>
            <EvilIcons name="like" size={26} />
            <Text>{post.like}k</Text>
          </View>
          <View style={styles.boxIcon}>
            <EvilIcons name="comment" size={26} />
            <Text>{post.comment}</Text>
          </View>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons name="share-outline" size={26} />
            <Text>{post.share}</Text>
          </View>
          
        </View>
      </View>
      <View style={styles.hr}></View>
    </>
  );
};

export default PostsItem;
const styles = StyleSheet.create({
  container: {},
  postBox: {
    padding: 10,
  },
  hr: {
    borderBlockColor: "#ccc",
    borderBottomWidth: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  avt: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: "#0866ff",
    marginRight: 5,
  },
  post: {
    width: "auto",
    height: 500,
    marginTop: 10,
    resizeMode: "stretch",
  },
  boxIcon:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#dbdbdb",
    paddingHorizontal:30,
    paddingVertical:7,
    borderRadius:150/2
  }
});
