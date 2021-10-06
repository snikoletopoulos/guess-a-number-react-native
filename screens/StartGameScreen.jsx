import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
	const [enteredValue, setEnteredValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(9);

	const numberInputHandler = inputValue => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
    setEnteredValue("");
		setConfirmed(false);
		setSelectedNumber(parseInt(enteredValue));
	};

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>;
  }

	const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number!", "Number must be between 1 and 99.", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			]);
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
		setConfirmed(true);
		setEnteredValue("");
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
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
							<Button title="Reset" color={colors.accent} onPress={resetInputHandler} />
						</View>
						<View style={styles.button}>
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
