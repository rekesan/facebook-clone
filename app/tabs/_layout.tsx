import { Platform, View } from "react-native";
import React from "react";

import Header from "../header";
import Tabs from "../../components/Tabs";
import { RenderIcon } from "../../components/RenderIcon";

const AppLayout = () => {
  const [headerVisibility, setHeaderVisibility] = React.useState(true);

  return (
    <>
      <View style={{ marginTop: Platform.OS === "web" ? 0 : 30 }} />
      {headerVisibility && (
        <Header
          title="onlyface"
          messenger
          search
          plus
          titleColor="#1a74e4"
          style={{ backgroundColor: "white" }}
        />
      )}
      <Tabs
        screenListeners={({ route }) => ({
          swipeEnd: () =>
            setHeaderVisibility(route.name === "feed" || Platform.OS === "web"),
        })}
        backBehavior="firstRoute"
        initialRouteName="feed"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          lazy: true,
          tabBarPressColor: "#e0e0e4",
          tabBarIcon: ({ focused }) => <RenderIcon isFocused={focused} tabName={route.name} />,
        })}
      >
        <Tabs.Screen name="feed" options={{ title: "facebook" }} />
        <Tabs.Screen name="friend" options={{ title: "Friends" }} />
        <Tabs.Screen name="watch" options={{ title: "Watch" }} />
        <Tabs.Screen name="marketplace" options={{ title: "Marketplace" }} />
        <Tabs.Screen name="notification" options={{ title: "Notifications" }} />
        <Tabs.Screen name="menu" options={{ title: "Menu" }} />
      </Tabs>
    </>
  );
};

export default AppLayout;


