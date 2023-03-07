import { View } from "react-native";
import Header from "../header";

function Notification() {
  return (
    <View style={{}}>
      <Header
        title="Notifications"
        search
        style={{ width: "100%", verticalAlign: "top", marginVertical: 10 }}
      />
    </View>
  );
}

export default Notification;
