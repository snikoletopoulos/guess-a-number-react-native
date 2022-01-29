import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "constants/colors";
import Title from "components/Title";

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  return (
    <View style={styles.header}>
      <Title style={styles.headerTitle}>{props.title}</Title>
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
