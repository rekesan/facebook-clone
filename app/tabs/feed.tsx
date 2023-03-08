import { View } from "dripsy";
import React from "react";
import { ScrollView } from "react-native";
import Post from "../../components/Post";
import { Story } from "../../components/Story";
import { CreatePostFeed } from "../../components/CreatePostFeed";

const Feed = () => {
  return (
    <ScrollView
      style={{ flex: 1, width: "100%", backgroundColor: "#c9ccd1" }}
      contentContainerStyle={{ rowGap: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <CreatePostFeed />
      <View style={{ height: 220, backgroundColor: "white" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          style={{ overflow: "visible", padding: 15, zIndex: 100 }}
          contentContainerStyle={{ gap: 6 }}
        >
          <Story
            user={{
              name: "Elián Abd al-Latif Rosales",
              dp: "https://i.pinimg.com/736x/72/da/33/72da336784646ca8c6ae31085f606e00.jpg",
            }}
          />
          <Story
            user={{
              name: "John Doe",
              dp: "https://i.pinimg.com/736x/72/da/33/72da336784646ca8c6ae31085f606e00.jpg",
            }}
          />
          <Story
            user={{
              name: "Animikii Alexandra Byrd",
              dp: "https://img.freepik.com/premium-photo/girl-dressed-as-unicorn-childrens-party_262114-1076.jpg?w=2000",
            }}
            viewed
          />
        </ScrollView>
      </View>

      <Post
        type="text"
        user={{
          name: "John Doe",
          dp: "https://i.pinimg.com/736x/72/da/33/72da336784646ca8c6ae31085f606e00.jpg",
        }}
        content="It's always a good idea to seek shelter from the evil gaze of the sun."
      />
      <Post
        type="image"
        user={{
          name: "Elián Abd al-Latif Rosales",
          dp: "https://i.pinimg.com/736x/72/da/33/72da336784646ca8c6ae31085f606e00.jpg",
        }}
        content="That is an appealing treasure map that I can't read."
        imageURI="https://3.bp.blogspot.com/-D7Qz6IwO1Nk/XEWax2XmMqI/AAAAAAAAiHo/cusqPOq8ydU7_NBT2jVlba-AyEPbiwWYACLcBGAs/s1600/MapLight01.jpg"
      />
      <Post
        type="image"
        user={{
          name: "Animikii Alexandra Byrd",
          dp: "https://img.freepik.com/premium-photo/girl-dressed-as-unicorn-childrens-party_262114-1076.jpg?w=2000",
        }}
        content="The light in his life was actually a fire burning all around him. Today I dressed my unicorn in preparation for the race."
        imageURI="https://img.freepik.com/premium-photo/girl-dressed-as-unicorn-childrens-party_262114-1076.jpg?w=2000"
      />

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default Feed;


