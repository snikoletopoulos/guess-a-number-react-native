import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  style?: any;
  [key: string]: any;
}

const Title: React.FC<Props> = props => {
  return (
    <Text {...props} style={{ ...styles.title, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
