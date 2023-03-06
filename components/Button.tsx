import { TouchableOpacity, Text, TextStyle, StyleProp } from "react-native";

function Button({ label, icon, onPress, style, textStyle, activeOpacity }: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "90%",
          maxWidth: 347,
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
        activeOpacity={activeOpacity}
      >
        {icon}
        <Text style={textStyle}>{label}</Text>
      </TouchableOpacity>
    </>
  );
}

interface ButtonProps {
  label: string;
  icon?: any;
  onPress?: any;
  style?: StyleProp<TextStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
  activeOpacity?: number;
}

export default Button;
