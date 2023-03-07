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

interface HeaderProps {
  title: string;
  titleColor?: ColorValue;
  style?: StyleProp<TextStyle> | undefined;
  search?: boolean;
  messenger?: boolean;
  plus?: boolean;
  settings?: boolean;
  userData?: boolean;
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 38,
    width: 38,
    borderRadius: 38 / 2,
    backgroundColor: "#e0e0e4",
    flex: -1,
    flexDirection: "row",
  },
});

export default function Header({
  title,
  titleColor = "black",
  style,
  ...props
}: HeaderProps) {
  return (
    <View
      style={{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        ...style,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "700",
          color: titleColor, //"#1a74e4",
        }}
      >
        {title}
      </Text>

      <View style={{ flexDirection: "row", gap: 5 }}>
        {props.plus && (
          <Button
            activeOpacity={0.6}
            icon={<Entypo name="plus" size={26} />}
            buttonStyle={styles.buttonStyle}
            onPress={() => alert("Plus")}
          />
        )}
        {props.userData && (
          <Button
            activeOpacity={0.6}
            icon={<FontAwesome5 name="user-alt" size={22} />}
            buttonStyle={styles.buttonStyle}
            onPress={() => alert("User Data")}
          />
        )}
        {props.settings && (
          <Button
            activeOpacity={0.6}
            icon={<Ionicons name="settings-sharp" size={26} />}
            buttonStyle={styles.buttonStyle}
            onPress={() => alert("Settings")}
          />
        )}
        {props.search && (
          <Button
            activeOpacity={0.6}
            icon={<Ionicons name="search" size={26} />}
            buttonStyle={styles.buttonStyle}
            onPress={() => alert("Search")}
          />
        )}
        {props.messenger && (
          <Button
            activeOpacity={0.6}
            icon={
              <MaterialCommunityIcons name="facebook-messenger" size={26} />
            }
            buttonStyle={styles.buttonStyle}
            onPress={() => alert("Messenger")}
          />
        )}
      </View>
    </View>
  );
}
