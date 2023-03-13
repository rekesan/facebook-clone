import { View } from "react-native";
import Header from "../../components/header";

const Markteplace = () => {
  return (
    <View>
      <Header
        title="Marketplace"
        userData
        search
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
}

export default Markteplace;
