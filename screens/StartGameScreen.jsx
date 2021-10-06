import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
	const [enteredValue, setEnteredValue] = useState("");

	const numberInputHandler = inputValue => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	return (
		<TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            value={enteredValue}
            autoCorrect={false}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
                onChange={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={colors.accent} onPress={() => {}} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={colors.primary} onPress={() => {}} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		paddingHorizontal: 10,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: "center",
	},
});
