import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardCardImage = ({ signToText, propWidth }) => {
  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.cardCardImage}>
      <View style={[styles.cardCardImageChild, styles.cardPosition]} />
      <View
        style={[
          styles.cardCardImageItem,
          styles.cardPosition,
          rectangleView1Style,
        ]}
      />
      <Text style={styles.signToText}>{signToText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    left: 8,
    top: 111,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  cardCardImageChild: {
    right: 9,
    backgroundColor: Color.colorTan,
    height: 220,
  },
  cardCardImageItem: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 120,
    height: 35,
  },
  signToText: {
    top: 120,
    left: 19,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontFamily: FontFamily.prostoOneRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  cardCardImage: {
    marginTop: -414,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    backgroundColor: Color.colorTeal_100,
    width: 375,
    height: 342,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
});

export default CardCardImage;
