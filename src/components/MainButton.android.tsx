import type { PropsWithChildren } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "@/constants/colors";

const MainButton = ({
  onPress,
  children,
}: { onPress: () => void } & PropsWithChildren) => {
  let ButtonWrapper: typeof TouchableNativeFeedback | typeof TouchableOpacity;

  if (+Platform.Version >= 21) {
    ButtonWrapper = TouchableNativeFeedback;
  } else {
    ButtonWrapper = TouchableOpacity;
  }

  return (
    <View style={styles.container}>
      <ButtonWrapper onPress={onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </ButtonWrapper>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
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
