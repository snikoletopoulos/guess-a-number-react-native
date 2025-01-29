import { Platform, StyleSheet, View } from "react-native";
import { Title } from "components/Title";
import colors from "constants/colors";

export const Header = ({ title }: { title: string }) => (
  <View
    style={[
      styles.headerBase,
      Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid,
      }),
    ]}
  >
    <Title style={styles.headerTitle}>{title}</Title>
  </View>
);

const styles = StyleSheet.create({
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
