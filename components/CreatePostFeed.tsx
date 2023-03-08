import { styled, useSx, View } from "dripsy";
import React from "react";
import { Image } from "react-native";
import Button from "./Button";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Container = styled(View)({
  height: 70,
  backgroundColor: "white",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  gap: 10,
});
export const CreatePostFeed = () => {
  const router = useRouter();
  const sx = useSx();

  const profileButtonStyle = sx({
    backgroundColor: "black",
    height: "100%",
    width: 50,
    maxWidth: 50,
    borderRadius: 25,
    flexDirection: "row",
  });

  const postButtonStyle = sx({
    height: "80%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#A5ADB3",
    alignItems: "flex-start",
    paddingLeft: 20,
    maxWidth: "100%",
  });

  const postTextStyle = sx({
    fontSize: 16,
    textAlign: "left",
  });

  const addImageButtonStyle = sx({
    height: "100%",
    borderRadius: 25,
    maxWidth: 50,
    flexDirection: "row",
  });

  return (
    <Container>
      <Button
        buttonStyle={profileButtonStyle}
        icon={
          <Image
            style={{ borderRadius: 50 }}
            source={{
              uri: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/280622957_3178543515767263_4548350198053808960_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9bPJ1IBF1uGNIq-CGTCTq71lqKp58FtTvWWoqnnwW1NaIywHvnk5cPZx0fWABQE2QQXcey6YwEmGJg-DCcr-i&_nc_ohc=mX89huGdmDsAX_x-qEK&_nc_ht=scontent.fmnl9-4.fna&oh=00_AfBw9JJlQyA2DP-3FD_mm-1BNvq82hxRBV_7lb-nnpcCPg&oe=640D5B87",
              width: 50,
              height: 50,
            }}
          />
        }
        onPress={() => router.push("../Profile")}
      />
      <Button
        buttonStyle={postButtonStyle}
        label="What's on your mind?"
        textStyle={postTextStyle}
        activeOpacity={0.5}
      />
      <Button
        buttonStyle={addImageButtonStyle}
        icon={<Entypo name="images" size={26} color="green" />}
        activeOpacity={0.7}
      />
    </Container>
  );
};
