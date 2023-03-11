import { Stack } from "expo-router";
import { makeTheme, DripsyProvider } from "dripsy";

const theme = makeTheme({
  colors: {
    $primary: "#1a74e4", // blue
    $secondary: "#1974e5", // blue
    $light: "#e0e0e4", // lighter gray 1
    $font: "#475a69", // gray
    $fontNoBg: "#1D2B33", // dark blue gray
    $bg: "#f2f2f2", // def background
    $border: "#A5ADB3", // light gray
    $tint: "#404040", // dark gray
    $pageBg: "#c9ccd1", // lighter gray 2
  },
  fontSizes: {
    $h1: 36,
    $h2: 24,
    $h3: 16,
    $s: 12,
  },
  fontWeights: {
    thin: "300",
    normal: "400",
    medium: "500",
    bold: "600",
    extraBold: "900",
  },
  buttons: {
    default: {
      padding: 3,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      overflow: 'hidden',
    },
    primary: {
      backgroundColor: "$primary",
    },
    secondary: {
      backgroundColor: "$light",
    },
    outline: {
      borderWidth: 1,
      borderColor: "$border",
    },
    borderless: {
      padding: 2,
    },
    icon: {
      padding: 2,
      backgroundColor: "$light",
    },
    fullRadius: {
      borderRadius: 500,
    },
    "width-90": {
      width: "90%",
    },
    widthFull: {
      width: "100%",
    },
    "padding-1": {
      padding: 1,
    },
    "padding-v-0": {
      paddingVertical: 0,
    },
    "padding-v-2":{
      paddingVertical: 2,
    },
    headerIcon: {
      width: 38,
      height: 38,
      padding: 0,
    },
    "flex-1": {
      flex: 1,
    },
    "flex-2": {
      flex: 2,
    },
    "flex-3": {
      flex: 3,
    },
    "flex-start": {
      justifyContent: "flex-start",
    },
  },
  text: {
    default: {
      textAlign: "center",
      textAlignVertical: "center",
      fontWeight: "bold",
      fontSize: [15, null, 16],
    },
    primary: {
      color: "$light",
    },
    darkFont: {
      color: "$tint",
    },
    extraBold: {
      fontWeight: "extraBold",
    },
    normal: {
      fontWeight: "normal",
    },
  },
});

type MyTheme = typeof theme;

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}

const Layout = () => {
  return (
    <DripsyProvider theme={theme}>
      <Stack
        screenOptions={({ route }) => ({
          headerShown: route.name.includes("profile"),
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerTitle: "",
        })}
      />
    </DripsyProvider>
  );
};

export default Layout;
