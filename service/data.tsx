import { PostProps, UserProps } from "../interface";

export const userData: UserProps[] = [
  {
    id: 1,
    name: "Elián Abd al-Latif Rosales",
    dp: "https://i.pinimg.com/474x/49/51/fd/4951fd98877aab69ae94ee360212da82--arab-men-hot-men.jpg",
    username: "abduljabul",
    story:
      "https://thumbs.dreamstime.com/b/rocky-beach-selangor-sunset-portrait-orientation-136485682.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    dp: "https://i.pinimg.com/736x/72/da/33/72da336784646ca8c6ae31085f606e00.jpg",
    username: "doenut",
    story: "https://pbs.twimg.com/media/C_9-ZfUUAAA6qz_.jpg",
  },
  {
    id: 3,
    name: "Animikii Alexandra Byrd",
    dp: "https://img.freepik.com/premium-photo/girl-dressed-as-unicorn-childrens-party_262114-1076.jpg?w=2000",
    username: "alexbyrd",
    story:
      "https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-for-landscape-photography.jpg",
  },
  {
    id: 4,
    name: "Red Kean Santelices",
    dp: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/280622957_3178543515767263_4548350198053808960_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9bPJ1IBF1uGNIq-CGTCTq71lqKp58FtTvWWoqnnwW1NaIywHvnk5cPZx0fWABQE2QQXcey6YwEmGJg-DCcr-i&_nc_ohc=mX89huGdmDsAX_x-qEK&_nc_ht=scontent.fmnl9-4.fna&oh=00_AfBw9JJlQyA2DP-3FD_mm-1BNvq82hxRBV_7lb-nnpcCPg&oe=640D5B87",
    username: "creed",
    story:
      "https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-zion-national-park.jpg",
  },
];

export const postData: PostProps[] = [
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
  {
    userId: 3,
    datePosted: new Date().toDateString(),
    type: "image",
    content: "She was the type of girl who wanted to live in a pink house.",
    imageURI:
      "https://static.fandomspot.com/images/07/7957/00-featured-mine-pink-hair-girl-in-akame-ga-kill-screenshot.jpg",
    reacts: { likes: 0 },
  },
  {
    userId: 2,
    datePosted: new Date().toDateString(),
    type: "text",
    content:
      "Jason didnt understand why his parents wouldnt let him sell his little sister at the garage sale." +
      " He was 100% into fasting with her until he understood that meant he couldnt eat." +
      "Just go ahead and press that button.",
    imageURI: null,
    reacts: { likes: 0 },
  },
];

export const mockDetails: string[] = [
  "Email Address Here...",
  "LinkedIn Profile Link Here...",
  "Twitter Profile Link Here...",
  "Birthdate Here...",
  "Github Account Here...",
  "See more na dito...",
];
