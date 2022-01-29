import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "constants/colors";

import BodyText from "components/BodyText";

const NumberContainer: React.FC = props => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.number}>{props.children}</BodyText>
    </View>
  );
};

export default NumberContainer;

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
