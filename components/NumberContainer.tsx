import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import colors from "constants/colors";

import { BodyText } from "components/BodyText";

export const NumberContainer = ({ children }: PropsWithChildren) => (
  <View style={styles.container}>
    <BodyText style={styles.number}>{children}</BodyText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.accent,
    fontSize: 22,
  },
});
