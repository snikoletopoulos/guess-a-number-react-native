import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  FlatList,
  Alert,
  Dimensions,
  ListRenderItemInfo,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "constants/colors";

import { generateRandomBetween } from "helpers/numbers";

import NumberContainer from "components/NumberContainer";
import Card from "components/Card";
import MainButton from "components/MainButton";
import Title from "components/Title";
import BodyText from "components/BodyText";

const renderListItem = (
  listLength: number,
  itemData: ListRenderItemInfo<number>
) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

interface Props {
  userChoice: number;
  onGameOver: (number: number) => void;
}

const GameScreen: React.FC<Props> = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  useEffect(() => {
    const updateLayout = () => {
      setDeviceWidth(Dimensions.get("window").width);
      setDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

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
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(pastGuesses => [nextNumber, ...pastGuesses]);
  };

  let listContainerStyle = styles.listContainer;
  let gameControls: JSX.Element;

  if (deviceWidth < 350) {
    listContainerStyle = styles.listContainerBig;
  }

  if (deviceHeight < 400) {
    gameControls = (
      <View style={styles.controls}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <NumberContainer>{currentGuess}</NumberContainer>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </View>
    );
  } else {
    gameControls = (
      <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </Card>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {gameControls}
      <View style={listContainerStyle}>
        <FlatList
          keyExtractor={guess => guess.toString()}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

export default GameScreen;

interface Styles {
  screen: ViewStyle;
  buttonContainer: ViewStyle;
  listContainer: ViewStyle;
  listContainerBig: ViewStyle;
  list: ViewStyle;
  listItem: ViewStyle;
  controls: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
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
