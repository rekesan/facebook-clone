import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../components/Button";
import SvgFacebook from "../components/SvgFacebook";
import SvgMeta from "../components/SvgMeta";
import Input from "../components/Input";

function Login() {
  let username: string;
  let password: string;

  const handleUsernameChange = (text: string) => {
    username = text;
  };

  const handlePasswordChange = (text: string) => {
    password = text;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => (Keyboard.isVisible ? Keyboard.dismiss() : null)}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
          minHeight: 600,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-100}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "row",
          }}
        >
          <SvgFacebook width={80} height={80} />
        </View>

        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
            rowGap: 15,
          }}
        >
          <Input
            style={textInputStyle.default}
            autoComplete="username"
            placeholder="Mobile number or email"
            onChangeText={handleUsernameChange}
            textContentType="username"
          />
          <Input
            style={textInputStyle.default}
            placeholder="Password"
            autoComplete="password"
            secureTextEntry
            onChangeText={handlePasswordChange}
            textContentType="password"
          />

          <Button
            label="Log in"
            buttonStyle={{
              height: 50,
              borderRadius: 5,
              backgroundColor: "#1a74e4",
            }}
            textStyle={{
              fontWeight: "bold",
              color: "#f2f2f2",
            }}
            onPress={() => {
              Alert.alert(
                "testing",
                `username: ${username}\npassword:${password}`
              );
            }}
            activeOpacity={0.8}
          />
          <Button
            label="Forgot password?"
            buttonStyle={{
              height: 50,
              width: 120,
            }}
            textStyle={{
              fontWeight: "bold",
              color: "#1D2B33",
            }}
            activeOpacity={0.5}
            onPress={() => Alert.alert("Forgot password", "Clicked")}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button
            label="Create new account"
            buttonStyle={{
              height: 40,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#A5ADB3",
            }}
            textStyle={{
              fontWeight: "bold",
              color: "#1D2B33",
            }}
            activeOpacity={0.5}
            onPress={() => Alert.alert("Create new account", "clicked")}
          />
          <View
            style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
          >
            <SvgMeta width={26} height={26} />
            <Text style={{ fontSize: 18, color: "#475a69", fontWeight: "500" }}>
              Meta
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default Login;

const textInputStyle = StyleSheet.create({
  default: {
    width: "90%",
    maxWidth: 347,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#A5ADB3",
    borderRadius: 5,
    height: 60,
    padding: 20,
    fontSize: 16,
  },
});
