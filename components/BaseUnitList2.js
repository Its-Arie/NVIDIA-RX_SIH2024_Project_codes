import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseUnitList2 = ({
  section1Numb,
  prop,
  lessons,
  frameViewHeight,
  frameViewTop,
  frameViewLeft,
}) => {
  const baseUnitList3Style = useMemo(() => {
    return {
      ...getStyleValue("height", frameViewHeight),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewHeight, frameViewTop, frameViewLeft]);

  return (
    <View style={[styles.baseUnitList, styles.baseFlexBox, baseUnitList3Style]}>
      <View style={styles.baseFlexBox}>
        <View style={styles.section1NumbersParent}>
          <Text style={[styles.section1, styles.textTypo]}>{section1Numb}</Text>
          <View style={[styles.parent, styles.baseFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-22.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{lessons}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.caretcircledownIcon}
        resizeMode="cover"
        source={require("../assets/caretcircledown.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.typographyRegularTextXS10,
  },
  section1: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorsDarkBase1,
    width: 285,
  },
  text: {
    fontSize: FontSize.typographyRegularTextXS10_size,
    color: Color.colorsLightBase3,
  },
  frameChild: {
    width: 3,
    height: 3,
  },
  parent: {
    gap: Gap.gap_md,
  },
  section1NumbersParent: {
    gap: Gap.gap_2xs,
  },
  caretcircledownIcon: {
    width: 32,
    height: 32,
  },
  baseUnitList: {
    position: "absolute",
    top: 163,
    left: 1,
    backgroundColor: Color.colorGainsboro_100,
    width: 375,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_2xs,
    gap: Gap.gap_2xl,
  },
});

export default BaseUnitList2;
