import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardPreBuild2 = ({ cardCardImage, courseTitle, propMarginLeft }) => {
  const cardPreBuild2Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.cardPreBuild, cardPreBuild2Style]}>
      <View style={styles.cardCardContentParent}>
        <View style={[styles.cardCardContent, styles.cardPosition]}>
          <Image
            style={styles.cardCardImage}
            resizeMode="cover"
            source={cardCardImage}
          />
        </View>
        <Text style={[styles.courseTitle, styles.cardPosition]}>
          {courseTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    alignItems: "center",
    width: 100,
    left: 0,
    position: "absolute",
  },
  cardCardImage: {
    borderRadius: Border.br_mini,
    width: 114,
    height: 70,
  },
  cardCardContent: {
    top: 0,
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseTitle: {
    top: 75,
    fontSize: FontSize.small_size,
    fontFamily: FontFamily.procionoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    height: 32,
  },
  cardCardContentParent: {
    alignSelf: "stretch",
    height: 107,
  },
  cardPreBuild: {
    marginTop: -67,
    marginLeft: -148.5,
    top: "50%",
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumaquamarine,
    width: 130,
    height: 134,
    padding: Padding.p_mini,
    position: "absolute",
  },
});

export default CardPreBuild2;
