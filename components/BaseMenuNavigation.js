import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseMenuNavigation = ({ icon1, writngPad, houseSimple, propWidth }) => {
  const writngPadStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const navigation = useNavigation();

  return (
    <View
      style={[styles.baseMenuNavigation, styles.baseMenuNavigationPosition]}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.arrowcircleleft}
            onPress={() => navigation.goBack()}
          >
            <Image style={styles.icon} resizeMode="cover" source={icon1} />
          </Pressable>
          <Text style={[styles.writngPad, writngPadStyle]}>{writngPad}</Text>
        </View>
        <View style={styles.frameWrapper}>
          <Pressable
            style={[
              styles.housesimpleWrapper,
              styles.baseMenuNavigationPosition,
            ]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              style={styles.arrowcircleleft}
              resizeMode="cover"
              source={houseSimple}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseMenuNavigationPosition: {
    position: "absolute",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowcircleleft: {
    width: 32,
    height: 32,
  },
  writngPad: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 245,
  },
  frameParent: {
    flexDirection: "row",
    gap: Gap.gap_2xl,
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper: {
    width: 50,
    height: 40,
  },
  baseMenuNavigation: {
    top: 44,
    left: 0,
    width: 375,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
});

export default BaseMenuNavigation;
