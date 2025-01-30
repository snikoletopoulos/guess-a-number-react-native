import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { BodyText } from "@/components/BodyText";
import { MainButton } from "@/components/MainButton";
import { Title } from "@/components/Title";
import colors from "@/constants/colors";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onRestart,
}: {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}) => (
  <ScrollView>
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>New Game</MainButton>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
