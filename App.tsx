import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import Chats from "./screens/Chats";
import WatchingVideo from "./screens/WatchingVideo";
import Notification from "./screens/Notification";
import Dating from "./screens/Dating";
import { NameScreens } from "./components/constants/enum";
import Navbar from "./components/Layout/Navbar/Navbar";
import { navigationRef } from "./components/hooks/RootNavigation";
import { useState } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const [currentRouter, setCurrentRouter] = useState("");
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() =>
          setCurrentRouter(navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={() => {
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          setCurrentRouter(currentRouteName);
        }}
      >
        <Navbar currentRouter={currentRouter} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={NameScreens.HOME}
        >
          <Stack.Screen name={NameScreens.HOME} component={Home} />
          <Stack.Screen name={NameScreens.FRIEND} component={Friends} />
          <Stack.Screen name={NameScreens.CHAT} component={Chats} />
          <Stack.Screen name={NameScreens.WATCHING} component={WatchingVideo} />
          <Stack.Screen
            name={NameScreens.NOTIFICATION}
            component={Notification}
          />
          <Stack.Screen name={NameScreens.DATING} component={Dating} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
