import { useSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styled, useSx } from "dripsy";
import { AntDesign } from "@expo/vector-icons";

import { UserProps } from "../../interface";
import { mockDetails, postData, userData } from "../../service/data";
import Button from "../../components/Button";
import Post from "../../components/Post";

const getUserLoggedIn = async () => {
  try {
    return await AsyncStorage.getItem("username");
  } catch (e) {
    alert(e);
  }
};

const getUser = async (p: { uName?: string; id?: number | string }) => {
  return await userData.find(
    (user) => user.username === p.uName || user.id == p.id
  );
};

const ProfileScroll = styled(ScrollView)({ backgroundColor: "#c9ccd1" });

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
  fontWeight: "bold",
});

const ButtonsView = styled(View)({
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
  const sx = useSx();

  if (userId === "me") {
    getUserLoggedIn().then((uN) =>
      getUser({ uName: uN }).then((s) => setUser(s))
    );
  } else {
    getUser({ id: userId.toString() }).then((s) => setUser(s));
  }

  const mainButtonStyle = sx({
    backgroundColor: "$primary",
    width: "40%",
    borderRadius: 5,
  });

  const secondButtonStyle = sx({
    backgroundColor: "$light",
    width: "40%",
    borderRadius: 5,
  });

  const thirdButtonStyle = sx({
    backgroundColor: "$light",
    width: "10%",
    maxWidth: 60,
    borderRadius: 5,
  });

  const DetailButtonStyle = sx({
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 3,
  });
  const DetailButtonTextStyle = sx({
    fontSize: "$h3",
    color: "$font",
  });

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
            <Button label="Add Friend" buttonStyle={mainButtonStyle} />
            <Button label="Edit Profile" buttonStyle={secondButtonStyle} />
            <Button label="..." buttonStyle={thirdButtonStyle} />
          </ButtonsView>
        </ProfileNameView>
      </BasicProfileView>

      <BasicDetailsView>
        <ButtonsView>
          <Button label="Posts" />
          <Button label="Reels" />
        </ButtonsView>
        <DetailsContentView>
          <ContentTitleView>Details</ContentTitleView>
          {mockDetails.map((label, index) => (
            <Button
              key={index}
              icon={
                <AntDesign name="iconfontdesktop" size={30} color="#475a69" />
              }
              label={label}
              buttonStyle={DetailButtonStyle}
              textStyle={DetailButtonTextStyle}
            />
          ))}
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
  fontWeight: "bold",
});
