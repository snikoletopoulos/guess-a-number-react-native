import React from "react";
import { StyleSheet, Text, TextStyle, StyleProp } from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  [key: string]: any;
}

const BodyText: React.FC<Props> = props => {
  return (
    <Text {...props} style={[styles.bodyText, props.style]}>
      {props.children}
    </Text>
  );
};

export default BodyText;

interface Styles {
  bodyText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  bodyText: {
    fontFamily: "open-sans",
  },
});
