import { useRouter } from "expo-router";
import { styled } from "dripsy";
import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import SvgFacebook from "../assets/logo/SvgFacebook";
import SvgSwr from "../assets/logo/SvgSWR";
import Input from "../components/Input";
import { CustomButton } from "../components/CustomButton";
import { setUserLoggedIn } from "../helper";

const StyledInput = styled(Input)({
  width: "90%",
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
  width: "100%",
  maxWidth: [null, null, 386],
  alignSelf: "center",
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

const BottomView = styled(View)({
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "center",
});

const CompanyView = styled(View)({
  flexDirection: "row",
  alignItems: "center",
});

const TechText = styled(Text)({
  fontSize: 18,
  color: "#7a9bb5",
  fontWeight: "normal",
});
const SwrText = styled(Text)({
  fontSize: 18,
  color: "#475a69",
  fontWeight: "bold",
});


const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            onChangeText={setUsername}
            textContentType="username"
          />
          <StyledInput
            placeholder="Password"
            autoComplete="password"
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry
          />

          <CustomButton
            text="Log in"
            variant={["primary", "width-90"]}
            textVariant={["primary"]}
            onPress={() => {
              alert(`username:${username} password:${password}`)
              router.push("./tabs");
              setUserLoggedIn("alexbyrd");
            }}
          />

          <CustomButton
            text="Forgot password?"
            variant={["borderless", "width-90"]}
            textVariant={["darkFont"]}
            onPress={() => {
              alert("Clicked");
            }}
          />
        </MidView>

        <BottomView>
          <CustomButton
            text="Create new account"
            variant={["outline", "width-90"]}
            textVariant={["darkFont"]}
            onPress={() => alert("Create new account")}
          />

          <CompanyView>
            <SvgSwr width={26} height={26} />
            <SwrText>SWR</SwrText>
            <TechText>TECH</TechText>
          </CompanyView>
        </BottomView>
      </KeyboardView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
