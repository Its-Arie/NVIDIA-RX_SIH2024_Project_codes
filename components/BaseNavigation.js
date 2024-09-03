import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Gap, FontFamily, Color, Border } from "../GlobalStyles";

const BaseNavigation = ({ iconsPlayCircle }) => {
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
                <View
                  style={[
                    styles.housesimpleParent,
                    styles.housesimpleParentPosition,
                  ]}
                >
                  <Image
                    style={styles.iconsSearchLayout}
                    resizeMode="cover"
                    source={require("../assets/housesimple.png")}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                </View>
              </Pressable>
              <View style={styles.frameWrapper}>
                <View
                  style={[
                    styles.iconsSearchWrapper,
                    styles.housesimpleParentPosition,
                  ]}
                >
                  <Image
                    style={[styles.iconsSearch, styles.iconsSearchLayout]}
                    resizeMode="cover"
                    source={require("../assets/icons--search.png")}
                  />
                </View>
              </View>
              <Pressable
                style={styles.frameWrapper}
                onPress={() => navigation.navigate("NewsFeed")}
              >
                <View
                  style={[
                    styles.iconsPlayCircleParent,
                    styles.iconsParentPosition,
                  ]}
                >
                  <Image
                    style={styles.iconsPlayCircle}
                    resizeMode="cover"
                    source={iconsPlayCircle}
                  />
                  <Text style={[styles.courses, styles.homeTypo]}>Courses</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.frameWrapper}
                onPress={() => navigation.navigate("Profile")}
              >
                <View
                  style={[styles.iconsUserParent, styles.iconsParentPosition]}
                >
                  <Image
                    style={styles.iconsPlayCircle}
                    resizeMode="cover"
                    source={require("../assets/icons--user.png")}
                  />
                  <Text style={[styles.courses, styles.homeTypo]}>Account</Text>
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
  housesimpleParentPosition: {
    alignItems: "center",
    marginTop: -16,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeTypo: {
    display: "none",
    textAlign: "center",
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  iconsSearchLayout: {
    height: 32,
    width: 32,
  },
  iconsParentPosition: {
    gap: Gap.gap_2xs,
    marginTop: -11,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home: {
    fontFamily: FontFamily.promptRegular,
    color: Color.textColorDownBar,
  },
  housesimpleParent: {
    marginLeft: -15.5,
    justifyContent: "center",
  },
  frameWrapper: {
    width: 50,
    height: 40,
  },
  iconsSearch: {
    overflow: "hidden",
  },
  iconsSearchWrapper: {
    marginLeft: -16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    marginTop: -16,
  },
  iconsPlayCircle: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  courses: {
    fontFamily: FontFamily.typographyRegularTextXS10,
    color: Color.colorsDarkBase1,
  },
  iconsPlayCircleParent: {
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
  baseNavigation2: {
    backgroundColor: Color.colorLightyellow,
    overflow: "hidden",
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
    backgroundColor: Color.colorsLightBase1,
    overflow: "hidden",
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

export default BaseNavigation;
