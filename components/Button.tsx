import { TouchableOpacity, Text, TextStyle, StyleProp } from "react-native";

function Button({
  label,
  icon,
  onPress,
  buttonStyle: style,
  textStyle,
  activeOpacity,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        width: "90%",
        maxWidth: 347,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      activeOpacity={activeOpacity}
    >
      {icon}
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

interface ButtonProps {
  label?: string;
  icon?: any;
  onPress?: any;
  buttonStyle?: StyleProp<TextStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
  activeOpacity?: number;
}

export default Button;
