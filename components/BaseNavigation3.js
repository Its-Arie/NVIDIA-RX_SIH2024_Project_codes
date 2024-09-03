import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gap, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BaseNavigation3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.baseNavigation, styles.baseLayout]}>
      <View style={[styles.baseNavigation1, styles.baseLayout]}>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <View style={styles.housesimpleWrapper}>
              <Image
                style={styles.housesimpleIcon}
                resizeMode="cover"
                source={require("../assets/housesimple3.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("SearchMenu")}
          >
            <View
              style={[styles.iconsSearchParent, styles.iconsParentPosition]}
            >
              <Image
                style={styles.iconsSearch}
                resizeMode="cover"
                source={require("../assets/icons--search1.png")}
              />
              <Text style={styles.explore}>Explore</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("NewsFeed")}
          >
            <View
              style={[styles.iconsSearchParent, styles.iconsParentPosition]}
            >
              <Image
                style={styles.iconsSearch}
                resizeMode="cover"
                source={require("../assets/icons--playcircle1.png")}
              />
              <Text style={styles.explore}>Courses</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={[styles.iconsUserParent, styles.iconsParentPosition]}>
              <Image
                style={styles.iconsSearch}
                resizeMode="cover"
                source={require("../assets/icons--user.png")}
              />
              <Text style={styles.explore}>Account</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseLayout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconsParentPosition: {
    gap: Gap.gap_2xs,
    marginTop: -11,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  housesimpleIcon: {
    width: 32,
    height: 32,
  },
  housesimpleWrapper: {
    marginTop: -16,
    marginLeft: -15.5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  frameWrapper: {
    width: 50,
    height: 40,
  },
  iconsSearch: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  explore: {
    fontSize: FontSize.typographyRegularTextXS10_size,
    fontFamily: FontFamily.typographyRegularTextXS10,
    color: Color.colorsDarkBase1,
    textAlign: "center",
    display: "none",
  },
  iconsSearchParent: {
    marginLeft: -11,
  },
  iconsUserParent: {
    marginLeft: -10.5,
  },
  frameParent: {
    marginTop: -19,
    marginLeft: -152,
    flexDirection: "row",
    gap: Gap.gap_3xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  baseNavigation1: {
    top: 0,
    overflow: "hidden",
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  baseNavigation: {
    bottom: 0,
    shadowColor: "rgba(27, 36, 47, 0.1)",
    shadowRadius: 200,
    elevation: 200,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorLightyellow,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default BaseNavigation3;
