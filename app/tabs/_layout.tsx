import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import Header from "../header";
import React from "react";
import Tabs from "../../components/Tabs";

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
        backBehavior="history"
        initialRouteName="feed"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          lazy: true,
          tabBarPressColor: "#e0e0e4",
          tabBarIcon: ({ focused }) => {
            let iconName;
            const size = 24;
            const color = focused ? "#1a74e4" : "#a8a8a8";
            switch (route.name) {
              case "feed":
                iconName = focused ? "md-home-sharp" : "md-home-outline";
                break;
              case "friend":
                iconName = focused ? "people" : "people-outline";
                break;
              case "watch":
                iconName = focused ? "md-tv-sharp" : "md-tv-outline";
                break;
              case "marketplace":
                iconName = focused ? "storefront" : "storefront-outline";
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              case "notification":
                iconName = focused
                  ? "md-notifications-sharp"
                  : "md-notifications-outline";
                break;
              case "menu":
                iconName = focused ? "md-menu-sharp" : "md-menu-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
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
