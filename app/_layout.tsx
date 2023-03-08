import { Stack } from "expo-router";
import { makeTheme, DripsyProvider } from "dripsy";

const theme = makeTheme({
  colors: {
    $primary: "#1a74e4",
    $secondary: "#1974e5",
    $font: "#475a69",
    $fontNoBg: "#1D2B33",
    $bg: "#f2f2f2",
    $border: "#A5ADB3",
    $tint: "#404040",
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
          headerShown: route.name === "Profile" ? true : false,
        })}
      />
    </DripsyProvider>
  );
};

export default Layout;
