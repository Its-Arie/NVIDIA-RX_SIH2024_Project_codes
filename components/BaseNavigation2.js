import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Gap, FontFamily, Color, Border } from "../GlobalStyles";

const BaseNavigation2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.baseNavigation, styles.baseLayout]}>
      <View style={[styles.baseNavigation1, styles.baseLayout]}>
        <View style={[styles.baseNavigation2, styles.baseLayout]}>
          <View style={[styles.baseNavigation1, styles.baseLayout]}>
            <View style={styles.frameParent}>
              <Pressable
                style={styles.frameWrapper}
                onPress={() => navigation.navigate("Dashboard")}
              >
                <View style={styles.housesimpleParent}>
                  <Image
                    style={styles.housesimpleIconLayout}
                    resizeMode="cover"
                    source={require("../assets/housesimple.png")}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
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
                  <Text style={[styles.explore, styles.homeTypo]}>Explore</Text>
                </View>
              </Pressable>
              <View style={styles.frameWrapper}>
                <View
                  style={[
                    styles.iconsPlayCircleParent,
                    styles.iconsParentPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.iconsPlayCircle,
                      styles.housesimpleIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/icons--playcircle2.png")}
                  />
                  <Text style={[styles.explore, styles.homeTypo]}>Courses</Text>
                </View>
              </View>
              <Pressable
                style={styles.frameWrapper}
                onPress={() => navigation.navigate("Profile")}
              >
                <View
                  style={[styles.iconsUserParent, styles.iconsParentPosition]}
                >
                  <Image
                    style={styles.iconsSearch}
                    resizeMode="cover"
                    source={require("../assets/icons--user.png")}
                  />
                  <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
                </View>
              </Pressable>
            </View>
          </View>
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
  homeTypo: {
    display: "none",
    textAlign: "center",
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  iconsParentPosition: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  housesimpleIconLayout: {
    height: 32,
    width: 32,
  },
  home: {
    fontFamily: FontFamily.promptRegular,
    color: Color.textColorDownBar,
  },
  housesimpleParent: {
    marginLeft: -15.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -16,
    left: "50%",
    top: "50%",
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
    fontFamily: FontFamily.typographyRegularTextXS10,
    color: Color.colorsDarkBase1,
  },
  iconsSearchParent: {
    marginLeft: -11,
    marginTop: -11,
    gap: Gap.gap_2xs,
  },
  iconsPlayCircle: {
    overflow: "hidden",
  },
  iconsPlayCircleParent: {
    marginLeft: -16,
    gap: Gap.gap_2xs,
    marginTop: -16,
  },
  iconsUserParent: {
    marginLeft: -10.5,
    marginTop: -11,
    gap: Gap.gap_2xs,
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
  baseNavigation2: {
    backgroundColor: Color.colorLightyellow,
    overflow: "hidden",
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 200,
    shadowRadius: 200,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(27, 36, 47, 0.1)",
    bottom: 0,
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  baseNavigation: {
    backgroundColor: Color.colorsLightBase1,
    overflow: "hidden",
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 200,
    shadowRadius: 200,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(27, 36, 47, 0.1)",
    bottom: 0,
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default BaseNavigation2;
