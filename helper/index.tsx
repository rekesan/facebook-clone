import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDto, UserProps } from "../interface";
import { userData } from "../service/data";

export const getUserLoggedIn = async (): Promise<string> => {
  try {
    return await AsyncStorage.getItem("username");
  } catch (error) {
    alert(error);
  }
};

export const setUserLoggedIn = async (username: string) => {
  try {
    await AsyncStorage.setItem("username", username);
  } catch (error) {
    alert(error);
  }
};

export const getUserData = async ({
  username,
  id,
}: UserDto): Promise<UserProps> => {
  return userData.find(
    (user: UserProps) => user.username === username || user.id == id
  );
};

export const getUserDataLoggedIn = async (): Promise<UserProps> => {
  return getUserLoggedIn().then((userLoggedIn) =>
    getUserData({ username: userLoggedIn })
  );
};
