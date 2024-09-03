import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Base = () => {
  return (
    <View style={[styles.base, styles.basePosition]}>
      <View style={[styles.action, styles.timeLayout]}>
        <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
      </View>
      <View style={[styles.container, styles.containerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.containerPosition]}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.combinedShapeIcon}
          resizeMode="cover"
          source={require("../assets/combined-shape.png")}
        />
        <Image
          style={styles.wiFiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: 0,
    top: 0,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.promptRegular,
    color: Color.colorsDarkBase1,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -5.8,
    right: 15,
    width: 67,
  },
  base: {
    width: 375,
    height: 44,
    position: "absolute",
    left: 0,
    top: 0,
  },
});

export default Base;
