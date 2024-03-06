import React from "react";
import PostsNew from "../Layout/New/PostsNew";
import StoryNew from "../Layout/New/StoryNew";
import Posts from "./Posts";
import { SafeAreaView, ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PostsNew />
        <StoryNew />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
