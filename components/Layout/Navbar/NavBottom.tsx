import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { NameScreens } from "../../constants/enum";

const NavBottom = ({currentRouter}) => {
  const navigator: any = useNavigation();
  
  

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => navigator.navigate(NameScreens.HOME)}
          >
            <Icon 
            color={currentRouter === NameScreens.HOME ? "blue" : "black"}
             name="home" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.navigate(NameScreens.FRIEND)}
          >
            <Icon color={currentRouter === NameScreens.FRIEND ? "blue" : "black"} name="users" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.navigate(NameScreens.CHAT)}
          >
            <Icon color={currentRouter === NameScreens.CHAT ? "blue" : "black"} name="message-circle" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.navigate(NameScreens.VIDEO)}
          >
            <Icon color={currentRouter === NameScreens.VIDEO ? "blue" : "black"} name="tv" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.navigate(NameScreens.NOTIFICATION)}
          >
            <Octicons color={currentRouter === NameScreens.NOTIFICATION ? "blue" : "black"} name="bell" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.navigate(NameScreens.DATING)}
          >
            <Icon color={currentRouter === NameScreens.DATING ? "blue" : "black"} name="heart" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.hr}></View>
      </View>
    </SafeAreaView>
  );
};

export default NavBottom;
const styles = StyleSheet.create({
  hr: {
    borderBlockColor: "#ccc",
    borderBottomWidth: 2,
    marginTop: 10,
    // marginBottom:10
  },
});
