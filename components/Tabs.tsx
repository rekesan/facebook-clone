import { Pressable } from "@bacons/react-views";
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import React from "react";
import { Platform } from "react-native";

import { withLayoutContext } from "expo-router/src/layouts/withLayoutContext";
import { Link } from "expo-router/src/link/Link";
import { Href } from "expo-router/src/link/href";

// This is the only way to access the navigator.
const TopTabNavigator = createMaterialTopTabNavigator().Navigator;

export const Tabs = withLayoutContext<
  MaterialTopTabNavigationOptions & { href?: Href | null },
  typeof TopTabNavigator
>(TopTabNavigator, (screens) => {
  return screens.map((screen) => {
    if (
      typeof screen.options !== "function" &&
      screen.options?.href !== undefined
    ) {
      const { href, ...options } = screen.options;
      return {
        ...screen,
        options: {
          ...options,
          // Force the button to go to the user's profile
          tabBarButton: (props) => {
            if (href === null) {
              return;
            }
            const children =
              Platform.OS === "web" ? (
                props.children
              ) : (
                <Pressable>{props.children}</Pressable>
              );
            return (
              <Link
                {...props}
                style={[{ display: "flex" }, props.style]}
                href={href}
                asChild={Platform.OS !== "web"}
                children={children}
              />
            );
          },
        },
      };
    }
    return screen;
  });
});

export default Tabs;
