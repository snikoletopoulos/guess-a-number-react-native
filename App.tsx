import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Header } from "@/components/Header";
import { GameOverScreen } from "@/screens/GameOverScreen";
import { GameScreen } from "@/screens/GameScreen";
import { StartGameScreen } from "@/screens/StartGameScreen";

void SplashScreen.preventAutoHideAsync();

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    void Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    })
      .then(() => setDataLoaded(true))
      .catch(() =>
        Alert.alert(
          "Error",
          "Failed to load application resources. Please restart the app.",
        ),
      );
  }, []);

  if (!dataLoaded) {
    return null;
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
    <View onLayout={SplashScreen.hide} style={styles.screen}>
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
