import { StyleSheet, View, type ViewProps } from "react-native";

export const Card = (props: ViewProps) => (
  <View style={[styles.card, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});
