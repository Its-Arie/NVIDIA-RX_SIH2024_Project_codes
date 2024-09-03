import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseUnitList1 = ({ vowels, prop, lessons, ellipseIconTop }) => {
  const baseUnitListStyle = useMemo(() => {
    return {
      ...getStyleValue("top", ellipseIconTop),
    };
  }, [ellipseIconTop]);

  return (
    <View style={[styles.baseUnitList, styles.baseFlexBox, baseUnitListStyle]}>
      <View style={styles.baseFlexBox}>
        <View style={styles.vowelsParent}>
          <Text style={[styles.vowels, styles.textTypo]}>{vowels}</Text>
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
  vowels: {
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
  vowelsParent: {
    gap: Gap.gap_2xs,
  },
  caretcircledownIcon: {
    width: 32,
    height: 32,
  },
  baseUnitList: {
    position: "absolute",
    top: 363,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    width: 375,
    height: 60,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_2xs,
    gap: Gap.gap_2xl,
  },
});

export default BaseUnitList1;
