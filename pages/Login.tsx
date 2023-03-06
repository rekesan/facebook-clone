import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import Button from "../components/Button";

function Login() {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
      }}
      behavior="height"
      keyboardVerticalOffset={-200}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 80, height: 80, alignSelf: "flex-end" }}
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
          }}
        />
      </View>
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={{
            borderWidth: 1,
            width: "90%",
            backgroundColor: "white",
            borderColor: "#A5ADB3",
            borderRadius: 5,
            height: 60,
            padding: 20,
            marginBottom: 10,
            fontSize: 16,
          }}
          editable
          autoCapitalize="none"
          autoComplete="email"
          placeholder="Mobile number or email"
          onChangeText={(text) => null}
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: "90%",
            backgroundColor: "white",
            borderColor: "#A5ADB3",
            borderRadius: 5,
            height: 60,
            padding: 20,
            marginBottom: 10,
            fontSize: 16,
          }}
          editable
          placeholder="Password"
          autoCapitalize="none"
          autoComplete="password"
          secureTextEntry
          onChangeText={(text) => null}
        />
        <Button
          label="Log in"
          style={{
            height: 50,
            borderRadius: 5,
            backgroundColor: "#1F67A6",
          }}
          textStyle={{
            fontWeight: "bold",
            color: "#f2f2f2",
          }}
          activeOpacity={0.8}
        />
        <Button
          label="Forgot password?"
          style={{
            height: 50,
            width: 120,
          }}
          textStyle={{
            fontWeight: "bold",
            color: "#1D2B33",
          }}
          activeOpacity={0.5}
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
          style={{
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
        />
        <Text style={{ fontSize: 26, color: "#1D2B33" }}>🐲 Dragoon</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
