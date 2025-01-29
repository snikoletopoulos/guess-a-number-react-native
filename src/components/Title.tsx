import { StyleSheet, Text, TextProps } from "react-native";

export const Title = ({ style, children, ...restProps }: TextProps) => (
  <Text {...restProps} style={[styles.title, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
