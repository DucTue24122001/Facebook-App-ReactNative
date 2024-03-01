import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "../../constants/image";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

const NavTop = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.imgLogo} source={images.logoFacebook} />
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.search}
        >
          <FontAwesomeIcons name="search" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.search}
        >
          <FontAwesomeIcons name="align-justify" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavTop;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgLogo: {
    width: 150,
    height: 30,
    resizeMode: "stretch",
  },
  search:{
    backgroundColor:"rgba(228,230,235,1.0)",
    width:40,
    height:40,
    borderRadius:100,
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    marginRight:5
  }
});
