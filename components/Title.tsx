import React from "react";
import { StyleSheet, StyleProp, Text, TextStyle } from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  [key: string]: any;
}

const Title: React.FC<Props> = props => {
  return (
    <Text {...props} style={[styles.title, props.style]}>
      {props.children}
    </Text>
  );
};

export default Title;

interface Styles {
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
