import { useSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import { styled } from "dripsy";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { UserProps } from "../../interface";
import { mockDetails, postData } from "../../service/data";
import Post from "../../components/Post";
import { CustomButton } from "../../components/CustomButton";
import { getUserData, getUserDataLoggedIn } from "../../helper";

const ProfileScroll = styled(ScrollView)({ backgroundColor: "$pageBg" });

const BasicProfileView = styled(View)({
  backgroundColor: "white",
  height: Dimensions.get("window").height * 0.5,
  minHeight: 380,
  justifyContent: "center",
});

const CoverPhotoView = styled(View)({
  flex: 1,
  overflow: "hidden",
  justifyContent: "center",
});

const CoverPhoto = styled(Image)({
  resizeMode: "cover",
  minWidth: 200,
  height: 500,
});

const ProfileNameView = styled(View)({
  flex: 1,
  justifyContent: "flex-end",
  gap: 10,
});

const ProfilePhoto = styled(Image)({
  borderRadius: 200,
  borderWidth: 5,
  borderColor: "white",
  width: 150,
  height: 150,
  marginLeft: 1,
  zIndex: 10,
});

const ProfileNameText = styled(Text)({
  fontSize: 26,
  marginLeft: 15,
  fontWeight: "extraBold",
});

const ButtonsView = styled(View)({
  width: "100%",
  height: 60,
  flexDirection: "row",
  padding: 10,
  gap: 10,
  borderBottomWidth: 1,
  borderBottomColor: "$border",
});

const ProfileBioText = styled(Text)({ fontSize: 18, marginLeft: 15 });

const Profile = () => {
  const { userId } = useSearchParams();
  const [user, setUser] = useState<UserProps>();

  if (userId === "me") {
    getUserDataLoggedIn().then((user: UserProps) => setUser(user));
  } else {
    getUserData({ id: userId.toString() }).then((user: UserProps) => setUser(user));
  }

  return (
    <ProfileScroll
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ rowGap: 10 }}
    >
      <BasicProfileView>
        <CoverPhotoView>
          <CoverPhoto source={{ uri: user?.dp }} />
        </CoverPhotoView>

        <ProfileNameView>
          <ProfilePhoto source={{ uri: user?.dp }} />
          <ProfileNameText>{user?.name}</ProfileNameText>
          <ProfileBioText>Soon to be</ProfileBioText>
          <ButtonsView>
            <CustomButton
              text={userId === "me" ? "Add Story" : "Add Friend"}
              variant={["primary", "flex-3", "padding-1"]}
              textVariant={["primary"]}
            />
            <CustomButton
              text="Edit Profile"
              variant={["secondary", "flex-2", "padding-1"]}
              textVariant={["outline", "darkFont"]}
            />
            <CustomButton
              icon={
                <Entypo name="dots-three-horizontal" size={16} color="black" />
              }
              variant={["secondary", "flex-1", "padding-1"]}
              textVariant={["outline", "darkFont"]}
            />
          </ButtonsView>
        </ProfileNameView>
      </BasicProfileView>

      <BasicDetailsView>
        <ButtonsView>
          <CustomButton
            text="Posts"
            variant={["secondary", "fullRadius", "padding-v-0"]}
          />
          <CustomButton
            text="Reels"
            variant={["secondary", "fullRadius", "padding-v-0"]}
          />
        </ButtonsView>
        <DetailsContentView>
          <ContentTitleView>Details</ContentTitleView>
          <CustomButton
            icon={
              <AntDesign
                name="calendar"
                size={26}
                color="#475a69"
                style={{ marginRight: 10 }}
              />
            }
            text={new Date(`${user?.details.birthdate}`).toDateString()}
            variant={["borderless", "flex-start"]}
            textVariant={["darkFont"]}
          />
          <CustomButton
            icon={
              <Entypo
                name="email"
                size={26}
                color="#475a69"
                style={{ marginRight: 10 }}
              />
            }
            text={user?.details.email}
            variant={["borderless", "flex-start"]}
            textVariant={["darkFont"]}
          />
          <CustomButton
            icon={
              <AntDesign
                name="linkedin-square"
                size={26}
                color="#475a69"
                style={{ marginRight: 10 }}
              />
            }
            text={user?.details.linkedin}
            variant={["borderless", "flex-start"]}
            textVariant={["darkFont"]}
          />
          <CustomButton
            icon={
              <AntDesign
                name="twitter"
                size={26}
                color="#475a69"
                style={{ marginRight: 10 }}
              />
            }
            text={user?.details.twitter}
            variant={["borderless", "flex-start"]}
            textVariant={["darkFont"]}
          />

          <CustomButton
            icon={
              <AntDesign
                name="github"
                size={26}
                color="#475a69"
                style={{ marginRight: 10 }}
              />
            }
            text={user?.details.github}
            variant={["borderless", "flex-start"]}
            textVariant={["darkFont"]}
          />
        </DetailsContentView>
      </BasicDetailsView>

      {postData.map(
        (post, index) =>
          post.userId === user?.id && <Post key={index} {...post} />
      )}
    </ProfileScroll>
  );
};

export default Profile;

const BasicDetailsView = styled(View)({
  backgroundColor: "white",
});

const DetailsContentView = styled(View)({
  padding: 15,
  borderBottomWidth: 1,
  borderBottomColor: "$border",
  gap: 10,
});

const ContentTitleView = styled(Text)({
  fontSize: "$h2",
  fontWeight: "700",
});
