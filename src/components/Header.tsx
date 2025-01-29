import { Platform, SafeAreaView, StyleSheet } from "react-native";

import { Title } from "@/components/Title";
import colors from "@/constants/colors";

export const Header = ({ title }: { title: string }) => (
  <SafeAreaView
    style={[
      styles.container,
      Platform.OS === "ios" ? styles.headerIOS : styles.headerAndroid,
    ]}
  >
    <Title style={styles.headerTitle}>{title}</Title>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 8,
  },
});
