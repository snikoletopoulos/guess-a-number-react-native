import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  style?: any;
  [key: string]: any;
}

const BodyText: React.FC<Props> = props => {
  return (
    <Text {...props} style={{ ...styles.bodyText, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
  },
});
