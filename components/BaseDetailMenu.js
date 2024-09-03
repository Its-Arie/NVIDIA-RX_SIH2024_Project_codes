import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseDetailMenu = ({ propTop, propHeight }) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  const navigation = useNavigation();

  return (
    <View style={styles.baseDetailMenu}>
      <View style={[styles.leftMenu, styles.menuLayout]}>
        <Text style={[styles.lessons, styles.lessonsTypo]}>પાઠો (Lessons)</Text>
      </View>
      <View style={[styles.rightMenu, styles.menuLayout]}>
        <View
          style={[styles.rightMenuChild, styles.menuLayout, rectangleViewStyle]}
        />
        <Pressable
          style={styles.lessonsPosition}
          onPress={() => navigation.navigate("ImageTracking")}
        >
          <Text style={[styles.practice1, styles.lessonsTypo]}>
            પ્રેક્ટિસ કરો (Practice)
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    width: 188,
    position: "absolute",
  },
  lessonsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.promptRegular,
    fontSize: FontSize.small_size,
    marginTop: -8,
  },
  lessons: {
    marginLeft: -39,
    color: Color.colorsDarkBase1,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  leftMenu: {
    backgroundColor: Color.colorsLightBase1,
    top: 0,
    width: 188,
    height: 52,
    left: 0,
  },
  rightMenuChild: {
    top: 1,
    backgroundColor: Color.semiBack,
    height: 51,
    left: 0,
  },
  practice1: {
    marginLeft: -54,
    color: Color.colorGray_100,
  },
  lessonsPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rightMenu: {
    left: 188,
    top: 0,
    width: 188,
    height: 52,
  },
  baseDetailMenu: {
    top: 311,
    backgroundColor: Color.colorsLightBase2,
    width: 375,
    height: 52,
    position: "absolute",
    left: 0,
  },
});

export default BaseDetailMenu;
