import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (prop) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{prop.title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		backgroundColor: "#f47b20",
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		color: "white",
		fontSize: 18,
	},
});
