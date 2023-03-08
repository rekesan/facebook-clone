import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../components/Button";
import SvgFacebook from "../components/SvgFacebook";
import SvgSwr from "../components/SvgSWR";
import Input from "../components/Input";
import { useRouter } from "expo-router";
import { styled, useSx } from "dripsy";

const StyledInput = styled(Input)({
  width: "90%",
  maxWidth: 347,
  backgroundColor: "white",
  borderWidth: 1,
  borderColor: "$border",
  borderRadius: 5,
  height: 60,
  padding: 20,
  fontSize: 16,
});

const KeyboardView = styled(KeyboardAvoidingView)({
  flex: 1,
  minHeight: 600,
  backgroundColor: "$bg",
});

const TopView = styled(View)({
  flex: 2,
  justifyContent: "center",
  alignItems: "flex-end",
  flexDirection: "row",
});

const MidView = styled(View)({
  flex: 4,
  justifyContent: "center",
  alignItems: "center",
  rowGap: 15,
});

const BotView = styled(View)({
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "center",
});

const Login = () => {
  const router = useRouter();
  const sx = useSx();

  const logInStyle = sx({
    height: 50,
    borderRadius: 5,
    backgroundColor: "$primary",
    flex: Platform.OS === "web" ? -1 : 0,
  });

  const textStyleWithBg = sx({
    fontWeight: "700",
    color: "$bg",
  });

  const forgotStyle = sx({
    flex: Platform.OS === "web" ? -1 : 0,
    height: 50,
  });

  const textBtnStyleNoBg = sx({
    color: "$fontNoBg",
    fontWeight: "700",
  });

  const newAccStyle = sx({
    height: 40,
    flex: Platform.OS === "web" ? -1 : 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "$border",
  });

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
      <KeyboardView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-100}
      >
        <TopView>
          <SvgFacebook width={80} height={80} />
        </TopView>

        <MidView>
          <StyledInput
            autoComplete="username"
            placeholder="Mobile number or email"
            onChangeText={handleUsernameChange}
            textContentType="username"
          />
          <StyledInput
            placeholder="Password"
            autoComplete="password"
            onChangeText={handlePasswordChange}
            textContentType="password"
            secureTextEntry
          />

          <Button
            label="Log in"
            buttonStyle={logInStyle}
            textStyle={textStyleWithBg}
            onPress={() => {
              router.push("./tabs");
            }}
            activeOpacity={0.8}
          />
          <Button
            label="Forgot password?"
            buttonStyle={forgotStyle}
            textStyle={textBtnStyleNoBg}
            activeOpacity={0.5}
            onPress={() => Alert.alert("Forgot password", "Clicked")}
          />
        </MidView>

        <BotView>
          <Button
            label="Create new account"
            buttonStyle={newAccStyle}
            textStyle={textBtnStyleNoBg}
            activeOpacity={0.5}
            onPress={() => Alert.alert("Create new account", "clicked")}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SvgSwr width={26} height={26} />
            <Text
              style={{ fontSize: 18, color: "#475a69", fontWeight: "bold" }}
            >
              SWR
            </Text>
            <Text style={{ fontSize: 18, color: "#7a9bb5", fontWeight: "600" }}>
              TECH
            </Text>
          </View>
        </BotView>
      </KeyboardView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
