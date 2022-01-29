import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  style?: any;
  [key: string]: any;
}

const Input: React.FC<Props> = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
