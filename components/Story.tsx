import { styled, View } from "dripsy";
import { Pressable, Text, Image } from "react-native";
import { StoryProps } from "../interface";

const ReelStyled = styled(Pressable)({
  backgroundColor: "$border",
  width: 105,
  borderRadius: 10,
  padding: 10,
  justifyContent: "space-between",
});
const ReelViewedStatus = styled(View)(({ viewed }) => ({
  backgroundColor: viewed ? "white" : "$secondary",
  width: 38,
  height: 38,
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",
}));
const DP = styled(Image)({
  backgroundColor: "$bg",
  width: 34,
  height: 34,
  borderRadius: 25,
});
const NameText = styled(Text)({
  fontSize: 12,
  color: "white",
  fontWeight: "bold",
});

export const Story = ({ user, viewed = false }: StoryProps) => {
  return (
    <ReelStyled onPress={() => alert("clicked story")}>
      <ReelViewedStatus viewed={viewed}>
        <DP source={{ uri: user.dp }} />
      </ReelViewedStatus>
      <NameText numberOfLines={2}>{user.name}</NameText>
    </ReelStyled>
  );
};
