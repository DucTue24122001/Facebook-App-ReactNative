import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"


const NavBottom = () => {
  return (
    <SafeAreaView>
      <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around"}}>
        <TouchableOpacity>
            <Icon name="home" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="users" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="message-circle" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="tv" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="heart" size={30}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavBottom;
