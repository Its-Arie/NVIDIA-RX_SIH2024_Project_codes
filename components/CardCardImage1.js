import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Border } from "../GlobalStyles";

const CardCardImage1 = () => {
  return (
    <ImageBackground
      style={styles.cardCardImage}
      resizeMode="cover"
      source={require("../assets/cardcardimage.png")}
    >
      <View style={styles.cardCardImageChild} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardCardImageChild: {
    position: "absolute",
    top: 12,
    left: 28,
    width: 51,
    height: 43,
    overflow: "hidden",
  },
  cardCardImage: {
    borderRadius: Border.br_mini,
    width: 114,
    height: 70,
  },
});

export default CardCardImage1;
