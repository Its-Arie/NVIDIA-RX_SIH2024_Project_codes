import React, { useMemo } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseMenuNavigation2 = ({ gujrati, propTop }) => {
  const gujratiLearningPathStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const navigation = useNavigation();

  return (
    <View style={styles.baseMenuNavigation}>
      <View
        style={[
          styles.baseMenuNavigationInner,
          styles.arrowcircleleftParentLayout,
        ]}
      >
        <View
          style={[
            styles.arrowcircleleftParent,
            styles.arrowcircleleftParentLayout,
          ]}
        >
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
          <Text style={[styles.gujratiLearningPath, gujratiLearningPathStyle]}>
            {gujrati}
          </Text>
          <View style={styles.frameChild} />
        </View>
      </View>
      <View style={styles.baseMenuNavigationChild}>
        <Pressable
          style={styles.housesimpleWrapper}
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
  arrowcircleleftParentLayout: {
    width: 297,
    height: 32,
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
  gujratiLearningPath: {
    top: -5,
    left: 52,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.typographyBoldTextDefault14,
    color: Color.colorWhite,
    textAlign: "left",
    width: 278,
    position: "absolute",
  },
  frameChild: {
    top: 28,
    left: 60,
    width: 237,
    height: 15,
    position: "absolute",
  },
  arrowcircleleftParent: {
    top: 0,
    height: 32,
    left: 0,
  },
  baseMenuNavigationInner: {
    top: 10,
    left: 19,
    height: 32,
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
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
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

export default BaseMenuNavigation2;
