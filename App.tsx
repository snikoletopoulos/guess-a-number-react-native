import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "components/Header";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GameOverScreen } from "screens/GameOverScreen";
import { GameScreen } from "screens/GameScreen";
import { StartGameScreen } from "screens/StartGameScreen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    })
      .then(() => setDataLoaded(true))
      .catch(error => console.log(error, "AppLoading error"));
  }, []);

  if (!dataLoaded) {
    return null;
  }

  let content = (
    <StartGameScreen
      onLayout={SplashScreen.hide}
      onStartGame={number => setUserNumber(number)}
    />
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
