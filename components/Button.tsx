import { TouchableOpacity, Text } from "react-native";
import { styled } from "dripsy";
import { ButtonProps } from "../interface";

const StyledButton = styled(TouchableOpacity)({
  flex: 1,
  width: "90%",
  maxWidth: 347,
  justifyContent: "center",
  alignItems: "center",
});

const Button = ({
  label,
  icon,
  onPress,
  buttonStyle: style,
  textStyle,
  activeOpacity,
}: ButtonProps) => {
  return (
    <StyledButton onPress={onPress} style={style} activeOpacity={activeOpacity}>
      {icon}
      <Text style={textStyle}>{label}</Text>
    </StyledButton>
  );
};

export default Button;
