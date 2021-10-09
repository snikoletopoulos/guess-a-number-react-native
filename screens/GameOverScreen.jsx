import React from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import Title from "../components/Title";
import CircleImg from "../assets/success.png";
import colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={CircleImg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText} >
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <Button
        style={styles.button}
        title="New Game"
        onPress={props.onRestart}
      />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontFamily: "open-sans",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
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
    marginVertical: 20
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  }
});
