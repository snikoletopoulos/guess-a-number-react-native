import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import Title from './Title';

const Header = prop => {
  return (
    <View style={styles.header}>
      <Title style={styles.headerTitle}>{prop.title}</Title>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
  },
});
