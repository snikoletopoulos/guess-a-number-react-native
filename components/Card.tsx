import React from "react";
import { View, ViewStyle, StyleSheet, StyleProp } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<Props> = props => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

export default Card;

interface Styles {
  card: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
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
