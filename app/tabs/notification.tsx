import { View } from "react-native";
import Header from "../../components/header";

const Notification = () => {
  return (
    <View style={{}}>
      <Header
        title="Notifications"
        search
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
};

export default Notification;
