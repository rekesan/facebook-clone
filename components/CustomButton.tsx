import { TouchableOpacity, Text, View } from "react-native";
import { styled } from "dripsy";

import { CustomButtonProps } from "../interface";

const StyledTouchable = styled(TouchableOpacity, {
  themeKey: "buttons",
  defaultVariant: "default",
})({});
const StyledText = styled(Text, {
  themeKey: "text",
  defaultVariant: "default",
})({});
const StyledView = styled(View)({
  alignItems: "center",
  flexDirection: "row",
});
export const CustomButton = ({
  variant,
  textVariant,
  text,
  onPress,
  icon,
}: CustomButtonProps) => {
  return (
    <StyledTouchable variants={variant} activeOpacity={0.7} onPress={onPress}>
      <StyledView>
        {icon}
        <StyledText variants={textVariant}>{text}</StyledText>
      </StyledView>
    </StyledTouchable>
  );
};
