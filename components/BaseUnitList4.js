import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseUnitList4 = ({ propTop }) => {
  const baseUnitList4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.baseUnitList, styles.baseFlexBox, baseUnitList4Style]}
      onPress={() => navigation.navigate("LessonPlan4")}
    >
      <View style={styles.baseFlexBox}>
        <View style={styles.section2AlphabetsParent}>
          <Text style={[styles.section2, styles.textTypo]}>
            વિભાગ 2 : મૂળાક્ષરો (Section 2 : Alphabets)
          </Text>
          <View style={[styles.parent, styles.baseFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>૪૮ પાઠો</Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-22.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>48 Lessons</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.caretcircledownIcon}
        resizeMode="cover"
        source={require("../assets/caretcircledown.png")}
      />
    </Pressable>
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
  section2: {
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
  section2AlphabetsParent: {
    gap: Gap.gap_2xs,
  },
  caretcircledownIcon: {
    width: 32,
    height: 32,
  },
  baseUnitList: {
    position: "absolute",
    top: 597,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    width: 375,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_2xs,
    gap: Gap.gap_2xl,
  },
});

export default BaseUnitList4;
