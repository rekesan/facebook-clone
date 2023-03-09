import { styled, useSx, View } from "dripsy";
import React from "react";
import { Image } from "react-native";
import Button from "./Button";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { userData } from "../service/data";

const Container = styled(View)({
  height: 70,
  backgroundColor: "white",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  gap: 10,
});

const ProfileButtonImage = styled(Image)({
  borderRadius: 50,
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
          <ProfileButtonImage
            source={{
              uri: userData.find((user) => user.username === "creed").dp,
              width: 50,
              height: 50,
            }}
          />
        }
        onPress={() => router.push("../profile/me")}
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
