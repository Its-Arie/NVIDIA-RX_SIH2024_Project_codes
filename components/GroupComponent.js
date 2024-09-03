import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ propTop, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.standardCollection2Parent, groupViewStyle]}>
      <View style={[styles.standardCollection2, styles.silentLearnLayout]}>
        <Text style={[styles.silentLearn, styles.silentLearnPosition]}>
          Silent Learn
        </Text>
      </View>
      <Image
        style={[
          styles.d5aef39b79eb7bc3c9b2a0d9d3ec1eIcon,
          styles.silentLearnPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/d5aef39b79eb7bc3c9b2a0d9d3ec1e14-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  silentLearnLayout: {
    height: 29,
    width: 212,
  },
  silentLearnPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  silentLearn: {
    fontSize: FontSize.size_29xl,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.ranchoRegular,
    textAlign: "center",
    height: 29,
    width: 212,
  },
  standardCollection2: {
    top: 21,
    left: 39,
    position: "absolute",
  },
  d5aef39b79eb7bc3c9b2a0d9d3ec1eIcon: {
    width: 55,
    height: 55,
  },
  standardCollection2Parent: {
    top: 150,
    left: 62,
    width: 251,
    height: 55,
    position: "absolute",
  },
});

export default GroupComponent;
