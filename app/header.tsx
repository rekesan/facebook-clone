import {
  View,
  Text,
} from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { styled } from "dripsy";

import { CustomButton } from "../components/CustomButton";
import { HeaderProps } from "../interface";

const Buttons = styled(View)({
  flexDirection: "row",
  columnGap: 1,
});

const Container = styled(View)({
  height: 50,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 15,
});

const Title = styled(Text)({
  fontSize: 32,
  fontWeight: "extraBold",
});

const Header = ({ title, titleColor, style, ...props }: HeaderProps) => {
  return (
    <Container style={style}>
      <Title style={{ color: titleColor }}>{title}</Title>

      <Buttons>
        {props.plus && (
          <CustomButton
            variant={["icon","fullRadius", "headerIcon"]}
            icon={<Entypo name="plus" size={26} />}
            onPress={props.plusOnPress}
          />
        )}
        {props.userData && (
          <CustomButton
            variant={["icon","fullRadius", "headerIcon"]}
            icon={<FontAwesome5 name="user-alt" size={22} />}
            onPress={props.userDataOnPress}
          />
        )}
        {props.settings && (
          <CustomButton
            variant={["icon","fullRadius", "headerIcon"]}
            icon={<Ionicons name="settings-sharp" size={26} />}
            onPress={props.settingsOnPress}
          />
        )}
        {props.search && (
          <CustomButton
            variant={["icon","fullRadius", "headerIcon"]}
            icon={<Ionicons name="search" size={26} />}
            onPress={props.searchOnPress}
          />
        )}
        {props.messenger && (
          <CustomButton
            variant={["icon","fullRadius", "headerIcon"]}
            icon={
              <MaterialCommunityIcons name="facebook-messenger" size={26} />
            }
            onPress={props.messengerOnPress}
          />
        )}
      </Buttons>
    </Container>
  );
};

export default Header;
