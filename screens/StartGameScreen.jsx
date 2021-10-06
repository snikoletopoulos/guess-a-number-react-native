import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start new game</Text>
			<View style={styles.inputContainer}>
				<Text>Select a number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<Button title="Reset" onPress={() => {}} />
					<Button title="Confirm" onPress={() => {}} />
				</View>
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
	title: {
    fontSize: 20,
    marginVertical: 10
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
    paddingHorizontal: 10
  },
});

export default StartGameScreen;
