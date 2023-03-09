import { View } from "react-native";
import Header from "../header";

const Menu = () => {
  return (
    <View>
      <Header
        title="Menu"
        settings
        search
        searchOnPress={() => null}
        settingsOnPress={() => null}
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
};

export default Menu;
