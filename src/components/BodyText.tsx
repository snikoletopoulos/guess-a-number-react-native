import { StyleSheet, Text, TextProps } from "react-native";

export const BodyText = ({ style, children, ...restProps }: TextProps) => (
  <Text {...restProps} style={[styles.bodyText, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
  },
});
