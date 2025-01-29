import { useState } from "react";
import { StyleSheet, View } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { StartGameScreen } from "screens/StartGameScreen";
import { GameScreen } from "screens/GameScreen";
import { GameOverScreen } from "screens/GameOverScreen";
import { Header } from "components/Header";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={error => console.log(error, "AppLoading error")}
      />
    );
  }

  let content = (
    <StartGameScreen onStartGame={number => setUserNumber(number)} />
  );

  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={numOfRounds => setRounds(numOfRounds)}
      />
    );
  } else if (userNumber && rounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={rounds}
        userNumber={userNumber}
        onRestart={() => {
          setRounds(0);
          setUserNumber(null);
        }}
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
