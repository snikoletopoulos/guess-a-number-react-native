import { StyleSheet, TextInput, type TextInputProps } from "react-native";

export const Input = ({ style, ...restProps }: TextInputProps) => (
  <TextInput {...restProps} style={[styles.input, style]} />
);

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
