import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import colors from "constants/colors";

interface Props {
  onPress: () => void;
}

const MainButton: React.FC<Props> = props => {
  let ButtonWrapper: typeof TouchableNativeFeedback | typeof TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonWrapper = TouchableNativeFeedback;
  } else {
    ButtonWrapper = TouchableOpacity;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonWrapper onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </ButtonWrapper>
    </View>
  );
};

export default MainButton;

interface Styles {
  buttonContainer: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },

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
