import { View } from "react-native";
import Header from "../header";

const Friend = () => {
  return (
    <View>
      <Header
        title="Friends"
        search
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
};

export default Friend;
