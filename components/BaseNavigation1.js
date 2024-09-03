import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap, Border } from "../GlobalStyles";

const BaseNavigation1 = () => {
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
                <View style={[styles.housesimpleParent, styles.parentPosition]}>
                  <Image
                    style={styles.housesimpleIcon}
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
                <View style={[styles.iconsSearchParent, styles.parentPosition]}>
                  <Image
                    style={styles.iconsSearch}
                    resizeMode="cover"
                    source={require("../assets/icons--search1.png")}
                  />
                  <Text style={[styles.explore, styles.homeTypo]}>Explore</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.frameWrapper}
                onPress={() => navigation.navigate("NewsFeed")}
              >
                <View style={[styles.iconsSearchParent, styles.parentPosition]}>
                  <Image
                    style={styles.iconsSearch}
                    resizeMode="cover"
                    source={require("../assets/icons--playcircle.png")}
                  />
                  <Text style={[styles.explore, styles.homeTypo]}>Courses</Text>
                </View>
              </Pressable>
              <View style={styles.frameWrapper}>
                <View style={[styles.userWrapper, styles.parentPosition]}>
                  <Image
                    style={styles.housesimpleIcon}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                </View>
              </View>
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
  parentPosition: {
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeTypo: {
    display: "none",
    textAlign: "center",
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  housesimpleIcon: {
    width: 32,
    height: 32,
  },
  home: {
    fontFamily: FontFamily.promptRegular,
    color: Color.textColorDownBar,
  },
  housesimpleParent: {
    justifyContent: "center",
    marginLeft: -15.5,
    marginTop: -16,
    alignItems: "center",
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
    marginTop: -11,
    marginLeft: -11,
    gap: Gap.gap_2xs,
  },
  userWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    marginLeft: -15.5,
    marginTop: -16,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    overflow: "hidden",
    backgroundColor: Color.colorLightyellow,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    elevation: 200,
    shadowRadius: 200,
    shadowColor: "rgba(27, 36, 47, 0.1)",
    bottom: 0,
    height: 70,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    position: "absolute",
  },
  baseNavigation: {
    overflow: "hidden",
    backgroundColor: Color.colorLightyellow,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    elevation: 200,
    shadowRadius: 200,
    shadowColor: "rgba(27, 36, 47, 0.1)",
    bottom: 0,
    height: 70,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    position: "absolute",
  },
});

export default BaseNavigation1;
