import { StyleProp, TextStyle } from "react-native";

export interface SvgProps {
  width: number;
  height: number;
}

export interface ButtonProps {
  label?: string;
  icon?: any;
  onPress?: any;
  buttonStyle?: StyleProp<TextStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
  activeOpacity?: number;
}

export interface PostProps {
  user?: any;
  datePosted?: Date;
  type: "text" | "image";
  content: string;
  imageURI?: string;
  reacts?: { likes: number };
}

export interface StoryProps {
  user?: any;
  viewed?: boolean;
}
