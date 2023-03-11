import { View, Text, Image } from "react-native";
import { styled } from "dripsy";
import { MaterialIcons, EvilIcons, Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

import { PostProps } from "../interface";
import { userData } from "../service/data";
import { CustomButton } from "./CustomButton";

const PostButtons = styled(View)({
  height: 50,
  margin: 10,
  marginTop: 20,
  marginBottom: 0,
  borderTopWidth: 1,
  borderTopColor: "$border",
  flexDirection: "row",
});

const Container = styled(View)({
  minHeight: 180,
  backgroundColor: "white",
  justifyContent: "space-between",
  alignContent: "center",
});

const PostUserView = styled(View)({
  flexDirection: "row",
  height: 50,
  justifyContent: "space-between",
  margin: 10,
  marginBottom: 0,
});

const PostContentView = styled(View)({
  flex: 1,
});

const UserView = styled(View)({ flexDirection: "row", gap: 10 });
const NameDateView = styled(View)({ justifyContent: "center" });

const UserNameText = styled(Text)({
  fontSize: 16,
  fontWeight: "extraBold",
});

const DatePostedText = styled(Text)({
  fontSize: 12,
  alignItems: "center",
  justifyContent: "center",
});

const PostText = styled(Text)(({ image }) => ({
  fontSize: image ? "$h3" : "$h1",
  fontWeight: "400",
  margin: 10,
}));

const ImageStyled = styled(Image)({
  width: "100%",
  height: 400,
  resizeMode: "cover",
});

const Post = ({ userId, type, content, imageURI }: PostProps) => {
  const router = useRouter();

  const user = userData.find((user) => user.id === userId);

  return (
    <Container>
      <PostUserView>
        <UserView>
          <CustomButton
            variant={["padding-1"]}
            icon={
              <Image
                style={{ borderRadius: 40 }}
                source={{ uri: user.dp, width: 50, height: 50 }}
              />
            }
            onPress={() => router.push(`../profile/${userId}`)}
          />
          <NameDateView>
            <Link href={`../profile/${userId}`}>
              <UserNameText>{user.name}</UserNameText>
            </Link>
            <DatePostedText>
              {new Date().toDateString()}{" "}
              {<MaterialIcons name="public" size={12} color="black" />}
            </DatePostedText>
          </NameDateView>
        </UserView>

        <CustomButton
          icon={<Entypo name="dots-three-horizontal" size={16} color="black" />}
          onPress={() => alert("Clicked 3dots button")}
        />
      </PostUserView>

      <PostContentView>
        <PostText image={type === "image"}>{content}</PostText>
        {type === "image" && (
          <ImageStyled
            source={{
              uri: imageURI,
            }}
          />
        )}
      </PostContentView>

      <PostButtons>
        <CustomButton
          icon={<EvilIcons name="like" size={24} color="black" />}
          text="Like"
          variant={["borderless", "flex-1"]}
          textVariant={["normal"]}
        />
        <CustomButton
          icon={<EvilIcons name="comment" size={24} color="black" />}
          text="Comment"
          variant={["borderless", "flex-1"]}
          textVariant={["normal"]}
        />
        <CustomButton
          icon={<EvilIcons name="share-apple" size={24} color="black" />}
          text="Share"
          variant={["borderless", "flex-1"]}
          textVariant={["normal"]}
        />
      </PostButtons>
    </Container>
  );
};

export default Post;
