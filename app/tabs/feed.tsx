import React from "react";
import { ScrollView, View } from "react-native";
import { styled } from "dripsy";

import Post from "../../components/Post";
import { Story } from "../../components/Story";
import { CreatePostFeed } from "../../components/CreatePostFeed";
import { postData, userData } from "../../service/data";

const FeedScroll = styled(ScrollView)({
  flex: 1,
  width: "100%",
  backgroundColor: "#c9ccd1",
});

const ReelView = styled(View)({
  height: 220,
  backgroundColor: "white",
});

const Feed = () => {
  return (
    <FeedScroll
      contentContainerStyle={{ rowGap: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <CreatePostFeed />
      <ReelView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          style={{ overflow: "visible", padding: 15, zIndex: 100 }}
          contentContainerStyle={{ gap: 6 }}
        >
          {userData.map((user) => (
            <Story key={user.id} user={user} />
          ))}
        </ScrollView>
      </ReelView>

      {postData.map((post, index) => (
        <Post key={index} {...post} />
      ))}

      <View style={{ height: 50 }} />
    </FeedScroll>
  );
};

export default Feed;
