import { PostProps, UserProps } from "../interface";

export const userData : UserProps[] = [
  {
    id: 1,
    name: "Elián Abd al-Latif Rosales",
    dp: "https://i.pinimg.com/474x/49/51/fd/4951fd98877aab69ae94ee360212da82--arab-men-hot-men.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    dp: "https://i.pinimg.com/736x/72/da/33/72da336784646ca8c6ae31085f606e00.jpg",
  },
  {
    id: 3,
    name: "Animikii Alexandra Byrd",
    dp: "https://img.freepik.com/premium-photo/girl-dressed-as-unicorn-childrens-party_262114-1076.jpg?w=2000",
  },
];

export const postData : PostProps[] = [
  {
    userId: 2,
    datePosted: new Date().toDateString(),
    type: "text",
    content:
      "It's always a good idea to seek shelter from the evil gaze of the sun.",
    imageURI: null,
    reacts: { likes: 0 },
  },
  {
    userId: 1,
    datePosted: new Date().toDateString(),
    type: "image",
    content: "That is an appealing treasure map that I can't read.",
    imageURI:
      "https://3.bp.blogspot.com/-D7Qz6IwO1Nk/XEWax2XmMqI/AAAAAAAAiHo/cusqPOq8ydU7_NBT2jVlba-AyEPbiwWYACLcBGAs/s1600/MapLight01.jpg",
    reacts: { likes: 0 },
  },
  {
    userId: 3,
    datePosted: new Date().toDateString(),
    type: "image",
    content:
      "The light in his life was actually a fire burning all around him. Today I dressed my unicorn in preparation for the race.",
    imageURI:
      "https://img.freepik.com/premium-photo/girl-dressed-as-unicorn-childrens-party_262114-1076.jpg?w=2000",
    reacts: { likes: 0 },
  },
];
