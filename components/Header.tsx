import React from "react";
import { View, ViewStyle, TextStyle, StyleSheet, Platform } from "react-native";
import colors from "constants/colors";

import Title from "components/Title";

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  return (
    <View
      style={[
        styles.headerBase,
        Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      ]}
    >
      <Title style={styles.headerTitle}>{props.title}</Title>
    </View>
  );
};

export default Header;

interface Styles {
  headerBase: ViewStyle;
  headerIOS: ViewStyle;
  headerAndroid: ViewStyle;
  headerTitle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

  headerAndroid: {
    backgroundColor: colors.primary,
  },

  headerTitle: {
    color: Platform.OS === "ios" ? colors.primary : "white",
  },
});
