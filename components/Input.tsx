import { TextInput, TextInputProps } from "react-native";

function Input(props: TextInputProps) {
  return <TextInput editable autoCapitalize="none" {...props} />;
}

export default Input;
