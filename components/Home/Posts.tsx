import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { listPosts } from "../constants/image";
import PostsItem from "./PostsItem";

const Posts = () => {
  return (
    <View>
      <FlatList
        data={postData}
        renderItem={({ item }: any) => <PostsItem post={item} />}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
const postData = [
  {
    urlPage: listPosts.avtPost1,
    urlPost:listPosts.post1,
    namePage: "Love you",
    time: 18,
    des: "Niềm hạnh phúc của em đến từ phía sau, nơi đó có anh <3 <3",
    like: 5.3,
    comment: 521,
    share: 179,
  },
  {
    urlPage: listPosts.avtPost1,
    urlPost:listPosts.post1,
    namePage: "Love you",
    time: 18,
    des: "Niềm hạnh phúc của em đến từ phía sau, nơi đó có anh <3 <3",
    like: 5.3,
    comment: 521,
    share: 179,
  },
  {
    urlPage: listPosts.avtPost1,
    urlPost:listPosts.post1,
    namePage: "Love you",
    time: 18,
    des: "Niềm hạnh phúc của em đến từ phía sau, nơi đó có anh <3 <3",
    like: 5.3,
    comment: 521,
    share: 179,
  },
  {
    urlPage: listPosts.avtPost1,
    urlPost:listPosts.post1,
    namePage: "Love you",
    time: 18,
    des: "Niềm hạnh phúc của em đến từ phía sau, nơi đó có anh <3 <3",
    like: 5.3,
    comment: 521,
    share: 179,
  },
 
];
