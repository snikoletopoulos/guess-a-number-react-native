import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BodyText } from "components/BodyText";
import { Card } from "components/Card";
import { Input } from "components/Input";
import { MainButton } from "components/MainButton";
import { NumberContainer } from "components/NumberContainer";
import colors from "constants/colors";

export const StartGameScreen = ({
  onStartGame,
}: {
  onStartGame: (number: number) => void;
}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(9);
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4,
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", () =>
      setButtonWidth(Dimensions.get("window").width / 4),
    );

    return () => subscription.remove();
  }, []);

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  const confirmInputHandler = () => {
    const chosenNumber = +enteredValue;
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }

    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <BodyText style={styles.title}>Start new game</BodyText>

            <Card style={styles.inputContainer}>
              <BodyText>Select a number</BodyText>

              <Input
                value={enteredValue}
                autoCorrect={false}
                blurOnSubmit
                keyboardType="number-pad"
                maxLength={2}
                style={styles.input}
                onChangeText={value =>
                  setEnteredValue(value.replace(/[^0-9]/g, ""))
                }
              />

              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={colors.accent}
                    onPress={resetInputHandler}
                  />
                </View>

                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    color={colors.primary}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>

            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    minWidth: 300,
    width: "80%",
    maxWidth: "95%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    width: Dimensions.get("window").width / 4,
    fontFamily: "open-sans",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
