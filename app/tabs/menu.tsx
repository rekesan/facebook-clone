import { View } from "react-native";
import Header from "../header";

function Menu() {
  return (
    <View style={{}}>
      <Header
        title="Menu"
        settings
        search
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
}

export default Menu;
