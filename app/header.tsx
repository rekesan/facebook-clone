import {
  View,
  Text,
  ColorValue,
  StyleProp,
  TextStyle,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { styled, useSx } from "dripsy";

interface HeaderProps {
  title: string;
  titleColor?: ColorValue;
  style?: StyleProp<TextStyle> | undefined;
  search?: boolean;
  searchOnPress?: () => void;
  messenger?: boolean;
  messengerOnPress?: () => void;
  plus?: boolean;
  plusOnPress?: () => void;
  settings?: boolean;
  settingsOnPress?: () => void;
  userData?: boolean;
  userDataOnPress?: () => void;
}

const styles = StyleSheet.create({
  btn: {
    height: 38,
    width: 38,
    minWidth: 38,
    borderRadius: 38 / 2,
    backgroundColor: "#e0e0e4",
    flexDirection: "row",
    flex: -1,
  },
});

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

const Header = ({
  title,
  titleColor = "black",
  style,
  ...props
}: HeaderProps) => {
  const sx = useSx();

  return (
    <Container style={style}>
      <Title style={{ color: titleColor }}>{title}</Title>

      <Buttons>
        {props.plus && (
          <Button
            activeOpacity={0.6}
            icon={<Entypo name="plus" size={26} />}
            buttonStyle={styles.btn}
            onPress={props.plusOnPress}
          />
        )}
        {props.userData && (
          <Button
            activeOpacity={0.6}
            icon={<FontAwesome5 name="user-alt" size={22} />}
            buttonStyle={styles.btn}
            onPress={props.userDataOnPress}
          />
        )}
        {props.settings && (
          <Button
            activeOpacity={0.6}
            icon={<Ionicons name="settings-sharp" size={26} />}
            buttonStyle={styles.btn}
            onPress={props.settingsOnPress}
          />
        )}
        {props.search && (
          <Button
            activeOpacity={0.6}
            icon={<Ionicons name="search" size={26} />}
            buttonStyle={styles.btn}
            onPress={props.searchOnPress}
          />
        )}
        {props.messenger && (
          <Button
            activeOpacity={0.6}
            icon={
              <MaterialCommunityIcons name="facebook-messenger" size={26} />
            }
            buttonStyle={styles.btn}
            onPress={props.messengerOnPress}
          />
        )}
      </Buttons>
    </Container>
  );
};

export default Header;
