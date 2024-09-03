import React, { useMemo } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseMenuNavigation1 = ({
  vowels,
  prop,
  propWidth,
  propLeft,
  propLeft1,
}) => {
  const vowelsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const ellipseIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const navigation = useNavigation();

  return (
    <View style={styles.baseMenuNavigation}>
      <View style={styles.baseMenuNavigationInner}>
        <View style={styles.arrowcircleleftParent}>
          <Pressable
            style={styles.arrowcircleleft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowcircleleft.png")}
            />
          </Pressable>
          <Text style={[styles.vowels, styles.textTypo, vowelsStyle]}>
            {vowels}
          </Text>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View style={styles.frameChild} />
          </View>
          <Text style={[styles.text, styles.textTypo, textStyle]}>{prop}</Text>
          <Image
            style={[styles.frameItem, ellipseIconStyle]}
            resizeMode="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
      </View>
      <Text style={[styles.alphabets, styles.textTypo]}>
        મૂળાક્ષરો ( Alphabets )
      </Text>
      <View style={styles.baseMenuNavigationChild}>
        <Pressable
          style={[styles.housesimpleWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={styles.housesimpleIcon}
            resizeMode="cover"
            source={require("../assets/housesimple1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    height: "100%",
  },
  arrowcircleleft: {
    left: "0%",
    top: "0%",
    right: "89.23%",
    bottom: "0%",
    width: "10.77%",
    height: "100%",
    position: "absolute",
  },
  vowels: {
    left: 52,
    width: 112,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
    top: 0,
  },
  frameChild: {
    height: 21,
    width: 31,
  },
  frameWrapper: {
    top: 4,
    left: 142,
    flexDirection: "row",
    width: 31,
  },
  text: {
    left: 173,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
    top: 0,
  },
  frameItem: {
    top: 9,
    left: 161,
    width: 3,
    height: 3,
    position: "absolute",
  },
  arrowcircleleftParent: {
    top: 0,
    height: 32,
    width: 297,
    left: 0,
    position: "absolute",
  },
  baseMenuNavigationInner: {
    top: 10,
    left: 19,
    height: 32,
    width: 297,
    position: "absolute",
  },
  alphabets: {
    top: 30,
    left: 79,
    fontSize: FontSize.size_xs_6,
    width: 285,
  },
  housesimpleIcon: {
    width: 32,
    height: 32,
  },
  housesimpleWrapper: {
    marginTop: -16,
    marginLeft: -15.5,
    top: "50%",
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
  },
  baseMenuNavigationChild: {
    top: 7,
    left: 299,
    width: 50,
    height: 40,
    position: "absolute",
  },
  baseMenuNavigation: {
    top: 44,
    width: 375,
    height: 52,
    left: 0,
    position: "absolute",
  },
});

export default BaseMenuNavigation1;
