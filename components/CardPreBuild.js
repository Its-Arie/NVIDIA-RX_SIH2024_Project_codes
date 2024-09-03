import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardPreBuild = ({
  prop,
  courseTitle,
  propMarginLeft,
  propMarginTop,
  propTop,
  propMarginTop1,
}) => {
  const cardPreBuildStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginLeft, propMarginTop]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("marginTop", propMarginTop1),
    };
  }, [propTop, propMarginTop1]);

  return (
    <View style={[styles.cardPreBuild, styles.textPosition, cardPreBuildStyle]}>
      <View style={[styles.cardCardContent, styles.cardFlexBox]}>
        <View style={styles.cardCardImage}>
          <Text style={[styles.text, styles.textTypo, text1Style]}>{prop}</Text>
        </View>
      </View>
      <Text style={[styles.courseTitle, styles.textTypo]}>{courseTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  cardFlexBox: {
    alignItems: "center",
    width: 120,
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.promptBold,
    fontWeight: "700",
  },
  text: {
    marginLeft: -16,
    top: -25,
    fontSize: FontSize.size_61xl,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  cardCardImage: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTeal_200,
    width: 114,
    height: 70,
  },
  cardCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseTitle: {
    fontSize: FontSize.small_size,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
  },
  cardPreBuild: {
    marginTop: -253,
    marginLeft: -163.5,
    top: "50%",
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
    width: 150,
    height: 150,
    padding: Padding.p_mini,
    gap: Gap.gap_lg,
  },
});

export default CardPreBuild;
