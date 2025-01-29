import type { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "@/constants/colors";

export const MainButton = ({
  onPress,
  children,
}: { onPress: () => void } & PropsWithChildren) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
    <View style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
