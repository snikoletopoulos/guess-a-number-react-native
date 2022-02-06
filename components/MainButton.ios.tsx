import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import colors from "constants/colors";

interface Props {
  onPress: () => void;
}

const MainButton: React.FC<Props> = props => {
  return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default MainButton;

interface Styles {
  button: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
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
