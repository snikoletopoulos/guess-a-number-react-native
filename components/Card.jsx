import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 10,
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 10,
	},
});
