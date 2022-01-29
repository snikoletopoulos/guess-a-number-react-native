import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App: React.FC = () => {
  const [userNumber, setUserNumber] = useState<number | null>(0);
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err, "hiiiiiiiiii")}
      />
    );
  }

  const configureNewGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={rounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
