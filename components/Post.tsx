import { styled, useSx } from "dripsy";
import { View, Text, Image } from "react-native";
import Button from "./Button";
import { MaterialIcons, EvilIcons, Entypo } from "@expo/vector-icons";
import { PostProps } from "../interface";
import { userData } from "../service/data";

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
  fontWeight: "900",
});

const DatePostedText = styled(Text)({
  fontSize: 12,
  alignItems: "center",
  justifyContent: "center",
});

const PostText = styled(Text)(({image}) => ({
  fontSize: image ? '$h3' : '$h1',
  fontWeight: "400",
  margin: 10,
}));

const ImageStyled = styled(Image)({
  width: "100%",
  height: 400,
  resizeMode: "cover",
});

const Post = ({ userId, datePosted, type, reacts, content, imageURI }: PostProps) => {
  const sx = useSx();

  const user = userData.find(user => user.id === userId);

  const BtnStyle = sx({ flexDirection: "row", maxWidth: "100%" });
  const ProfileBtnStyle = sx({
    backgroundColor: "black",
    height: 50,
    width: 50,
    maxWidth: 50,
    borderRadius: 25,
    flex: -1,
    flexDirection: 'row'
  });
  const IconStyle = sx({ maxWidth: 24, height: 24 });

  return (
    <Container>
      <PostUserView>
        <UserView>
          <Button
            buttonStyle={ProfileBtnStyle}
            icon={<Image style={{borderRadius: 40}} source={{uri: user.dp,width: 50, height: 50}}/>}
            onPress={() => alert("clicked profile")}
          />
          <NameDateView>
            <UserNameText>{user.name}</UserNameText>
            <DatePostedText>
              {new Date().toDateString()}{" "}
              {<MaterialIcons name="public" size={12} color="black" />}
            </DatePostedText>
          </NameDateView>
        </UserView>

        <Button
          icon={<Entypo name="dots-three-horizontal" size={24} color="black" />}
          buttonStyle={IconStyle}
          onPress={() => alert("Clicked 3dots button")}
        />
      </PostUserView>

      <PostContentView>
        <PostText image={type === "image"}>{content}</PostText>
        { type === "image" && 
          <ImageStyled
            source={{
              uri: imageURI,
            }}
          />
        }
      </PostContentView>

      <PostButtons>
        <Button
          icon={<EvilIcons name="like" size={24} color="black" />}
          label="Like"
          buttonStyle={BtnStyle}
        />
        <Button
          icon={<EvilIcons name="comment" size={24} color="black" />}
          label="Comment"
          buttonStyle={BtnStyle}
        />
        <Button
          icon={<EvilIcons name="share-apple" size={24} color="black" />}
          label="Share"
          buttonStyle={BtnStyle}
        />
      </PostButtons>
    </Container>
  );
};

export default Post;
