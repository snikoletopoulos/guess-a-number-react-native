import React from "react";
import { TextInput, TextStyle, StyleSheet, StyleProp } from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  [key: string]: any;
}

const Input: React.FC<Props> = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default Input;

interface Styles {
  input: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
