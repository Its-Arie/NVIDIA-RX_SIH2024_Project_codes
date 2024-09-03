import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const MaskGroup = () => {
  return (
    <View style={styles.maskGroup52}>
      <View style={styles.pavigationParent}>
        <Image
          style={[styles.pavigationIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/pavigation1.png")}
        />
        <View style={styles.text}>
          <Text
            style={[styles.freeCoursesFor, styles.freeFlexBox]}
          >{`Free courses for you to 
find your way to learning`}</Text>
        </View>
        <View style={styles.title}>
          <Text
            style={[styles.numerousFreeTrial, styles.freeFlexBox]}
          >{`Numerous free
trial courses`}</Text>
        </View>
        <Image
          style={[styles.illustrationIcon, styles.skipIconPosition]}
          resizeMode="cover"
          source={require("../assets/illustration2.png")}
        />
      </View>
      <View style={[styles.skip, styles.skipIconPosition]}>
        <View style={[styles.skip1, styles.skipIconPosition]}>
          <Image
            style={[styles.skipBackgroundIcon, styles.skipIconPosition]}
            resizeMode="cover"
            source={require("../assets/skip-background.png")}
          />
          <Text style={styles.skip2}>Skip</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  freeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  skipIconPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  pavigationIcon: {
    height: "1.02%",
    width: "25.38%",
    top: "98.98%",
    right: "37.31%",
    left: "37.31%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  freeCoursesFor: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    height: "9.9%",
    width: "76.15%",
    top: "78.77%",
    right: "11.92%",
    bottom: "11.33%",
    left: "11.92%",
    position: "absolute",
  },
  numerousFreeTrial: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorLavender_100,
  },
  title: {
    height: "13.61%",
    width: "64.62%",
    top: "61.44%",
    right: "17.69%",
    bottom: "24.96%",
    left: "17.69%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "53.62%",
    bottom: "46.38%",
    width: "100%",
    right: "0%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  pavigationParent: {
    height: "90.31%",
    width: "86.38%",
    top: "9.69%",
    right: "13.62%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  skipBackgroundIcon: {
    width: "100%",
    right: "0%",
    left: "0%",
    height: "100%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  skip2: {
    height: "54.26%",
    width: "64.44%",
    top: "31.01%",
    left: "18.44%",
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorLightsteelblue,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  skip1: {
    width: "100%",
    right: "0%",
    left: "0%",
    height: "100%",
    bottom: "0%",
  },
  skip: {
    height: "7.44%",
    width: "14.95%",
    bottom: "92.56%",
    left: "85.05%",
  },
  maskGroup52: {
    height: "64.04%",
    width: "80.27%",
    top: "7.39%",
    right: "9.87%",
    bottom: "28.57%",
    left: "9.87%",
    position: "absolute",
  },
});

export default MaskGroup;
