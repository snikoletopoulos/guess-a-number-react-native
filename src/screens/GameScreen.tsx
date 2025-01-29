import { useEffect, useRef, useState } from "react";
import { Alert, Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BodyText } from "@/components/BodyText";
import { Card } from "@/components/Card";
import { MainButton } from "@/components/MainButton";
import { NumberContainer } from "@/components/NumberContainer";
import { Title } from "@/components/Title";
import colors from "@/constants/colors";
import { generateRandomBetween } from "@/helpers/numbers";

export const GameScreen = ({
  userChoice,
  onGameOver,
}: {
  userChoice: number;
  onGameOver: (number: number) => void;
}) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width,
  );
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("window").height,
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver, pastGuesses.length]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", () => {
      setDeviceWidth(Dimensions.get("window").width);
      setDeviceHeight(Dimensions.get("window").height);
    });

    return () => subscription.remove();
  }, []);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(pastGuesses => [nextNumber, ...pastGuesses]);
  };

  let gameControls = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="remove" size={24} color="white" />
        </MainButton>

        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="add" size={24} color="white" />
        </MainButton>
      </Card>
    </>
  );

  if (deviceHeight < 400) {
    gameControls = (
      <View style={styles.controls}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="remove" size={24} color="white" />
        </MainButton>

        <NumberContainer>{currentGuess}</NumberContainer>

        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="add" size={24} color="white" />
        </MainButton>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {gameControls}

      <View
        style={
          deviceWidth < 350 ? styles.listContainerBig : styles.listContainer
        }
      >
        <FlatList
          keyExtractor={guess => guess.toString()}
          data={pastGuesses}
          renderItem={item => (
            <View style={styles.listItem}>
              <BodyText>#{pastGuesses.length - item.index}test</BodyText>
              <BodyText>{item.item}</BodyText>
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 300,
    maxWidth: "90%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  listContainer: {
    flex: 1,
    width: "80%",
  },
  listContainerBig: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: colors.accent,
    borderWidth: 1,
    borderRadius: 200,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
