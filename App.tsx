import { makeTheme, DripsyProvider } from "dripsy";
// import { Text } from "react-native";
import Login from "./pages/Login";

const theme = makeTheme({
  colors: {
    primary: "#1a74e4",
    font: "#475a69",
    bg: "#f2f2f2",
    border: "#A5ADB3",
  },
  
  types: {
    reactNativeTypesOnly: true,
  }
});

type MyTheme = typeof theme

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <Login />
      {/* <Text>adasdasd</Text> */}
    </DripsyProvider>
  );
}