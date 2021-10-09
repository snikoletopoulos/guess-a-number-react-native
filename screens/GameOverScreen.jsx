import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import CircleImg from "../assets/success.png";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={CircleImg} style={styles.image} resizeMode="cover" />
      </View>
      <BodyText>The Game is Over!</BodyText>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
