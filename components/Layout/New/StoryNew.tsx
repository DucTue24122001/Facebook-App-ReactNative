import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { images, listStory } from "../../constants/image";
import AntDesign from "react-native-vector-icons/AntDesign";
import StoryItem from "./StoryItem";

const StoryNew = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.boxStr}>
            <Image style={styles.sizeImage} source={images.avt} />
            <View style={styles.pluscircle}>
              <AntDesign color={"#0866ff"} name="pluscircle" size={25} />
            </View>
            <Text style={styles.styleText}>Thêm vào tin</Text>
          </TouchableOpacity>
          <FlatList
            data={data}
            renderItem={({ item }: any) => <StoryItem item={item} />}
            horizontal={true}
          />
        </ScrollView>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
};

export default StoryNew;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  sizeImage: {
    width: 100,
    height: 100,
  },
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
  styleText: {
    fontWeight: "900",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 18,
  },
  pluscircle: {
    position: "absolute",
    top: 85,
    left: 34,
    borderWidth: 2,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 150 / 2,
  },
  hr: {
    borderBlockColor: "#ccc",
    borderBottomWidth: 4,
    marginTop: 10,
    marginBottom: 10,
  },
});

const data = [
  {
    url: listStory.img0,
    name: "Trang Duong",
    stt: 1,
  },
  {
    url: listStory.img1,
    name: "Ngoc Anh",
    stt: 3,
  },
  {
    url: listStory.img2,
    name: "Hà Vi",
    stt: 1,
  },
  {
    url: listStory.img3,
    name: "Đỗ Bích Ngọc",
    stt: 2,
  },
  {
    url: listStory.img4,
    name: "Nguyen Lan Anh",
    stt: 5,
  },
];
