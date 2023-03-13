import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styled, View } from "dripsy";

import { CustomButton } from "./CustomButton";
import { getUserDataLoggedIn } from "../helper";
import { UserProps } from "../interface";
import { useState } from "react";

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
  const [user, setUser] = useState<UserProps>();

  getUserDataLoggedIn().then(user => setUser(user));

  return (
    <Container>
      <CustomButton
        icon={
          <ProfileButtonImage
            source={{
              uri: user?.dp,
              width: 50,
              height: 50,
            }}
          />
        }
        onPress={() => router.push("../profile/me")}
        variant={["padding-1"]}
      />
      <CustomButton
        text="What's on your mind?"
        variant={[
          "outline",
          "fullRadius",
          "flex-1",
          "padding-v-2",
          "flex-start",
        ]}
        textVariant={["normal"]}
      />
      <CustomButton
        icon={<Entypo name="images" size={26} color="green"/>}
        variant={["padding-1"]}
      />
    </Container>
  );
};
