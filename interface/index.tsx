import { ColorValue } from "react-native";
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
  userId?: number;
  datePosted?: Date | string;
  type: "text" | "image";
  content: string;
  imageURI?: string | undefined | null;
  reacts?: { likes: number };
}

export interface StoryProps {
  user?: any;
  viewed?: boolean;
}

export interface UserProps {
  id?: number;
  username?: string;
  name?: string;
  dp?: string;
  story?: string;
  details?: {
    birthdate?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface UserDto {
  username?: string;
  id?: number | string;
}

export interface HeaderProps {
  title: string;
  titleColor?: ColorValue;
  style?: StyleProp<TextStyle> | undefined;
  search?: boolean;
  searchOnPress?: () => void;
  messenger?: boolean;
  messengerOnPress?: () => void;
  plus?: boolean;
  plusOnPress?: () => void;
  settings?: boolean;
  settingsOnPress?: () => void;
  userData?: boolean;
  userDataOnPress?: () => void;
}

export interface CustomButtonProps {
  variant?: any;
  textVariant?: any;
  text?: string;
  onPress?: () => void;
  icon?: JSX.Element;
}
