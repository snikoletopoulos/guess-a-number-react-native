import React from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
  Dimensions,
  ScrollView,
} from "react-native";
import colors from "constants/colors";

import CircleImg from "assets/success.png";

import BodyText from "components/BodyText";
import Title from "components/Title";
import MainButton from "components/MainButton";

interface Props {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<Props> = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Title>The Game is Over!</Title>
        <View style={styles.imageContainer}>
          <Image source={CircleImg} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

interface Styles {
  screen: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  resultContainer: ViewStyle;
  resultText: TextStyle;
  highlight: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },

  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },

  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },

  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
