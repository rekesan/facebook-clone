import { View } from "react-native";
import Header from "../../components/header";

const Watch = () => {
  return (
    <View style={{}}>
      <Header
        title="Watch"
        userData
        search
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
}

export default Watch;
