import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Gap,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const CardPreBuild4 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.cardPreBuild, styles.cardPreBuildPosition]}
      onPress={() => navigation.navigate("Science")}
    >
      <View style={styles.cardCardContent}>
        <View style={styles.cardCardImage}>
          <Image
            style={[styles.educationBrain, styles.cardPreBuildPosition]}
            resizeMode="cover"
            source={require("../assets/education--brain.png")}
          />
        </View>
        <View style={styles.cardCardTitleLight}>
          <Text style={styles.courseTitle}>વિજ્ઞાન (Science)</Text>
          <View style={[styles.bottomSection, styles.ratingFlexBox]}>
            <View style={styles.ratingFlexBox}>
              <Image
                style={styles.starIcon}
                resizeMode="cover"
                source={require("../assets/star.png")}
              />
              <Text style={styles.value}>4.6</Text>
            </View>
            <Image
              style={styles.separatorIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-221.png")}
            />
            <Text style={styles.level}>All Level</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardCardProgressParent}>
        <View style={styles.cardCardProgress}>
          <View style={styles.icon}>
            <Image
              style={styles.iconsAward}
              resizeMode="cover"
              source={require("../assets/icons--award.png")}
            />
          </View>
          <View style={styles.content}>
            <Text style={[styles.currentProgress, styles.currentTypo]}>
              Current Progress
            </Text>
            <Text style={[styles.text, styles.textTypo]}>50%</Text>
          </View>
        </View>
        <View style={styles.cardCardProgress}>
          <View style={styles.icon}>
            <Image
              style={styles.iconsAward}
              resizeMode="cover"
              source={require("../assets/icons--award.png")}
            />
          </View>
          <View style={styles.content}>
            <Text style={[styles.currentProgress, styles.currentTypo]}>
              Current Progress
            </Text>
            <Text style={[styles.text, styles.textTypo]}>50%</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardProgressBar}>
        <View style={[styles.cardProgressBarChild, styles.cardPosition]} />
        <View style={[styles.cardProgressBarItem, styles.cardPosition]} />
      </View>
      <View style={styles.cardCardProgressParent}>
        <View style={styles.cardContentDetail}>
          <Text style={[styles.currentProgress2, styles.currentTypo]}>
            Current Progress
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>50%</Text>
        </View>
        <View style={styles.cardContentDetail}>
          <Text style={[styles.currentProgress2, styles.currentTypo]}>
            Current Progress
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>50%</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardPreBuildPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  ratingFlexBox: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    flexDirection: "row",
  },
  currentTypo: {
    color: Color.colorsLightBase3,
    fontFamily: FontFamily.typographyRegularTextXS10,
    fontSize: FontSize.typographyRegularTextXS10_size,
    textAlign: "left",
  },
  textTypo: {
    color: Color.colorsDarkBase1,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontFamily: FontFamily.typographyRegularTextXS10,
    textAlign: "left",
  },
  cardPosition: {
    borderRadius: Border.br_6xl,
    left: 0,
    top: 0,
    height: 15,
    position: "absolute",
  },
  educationBrain: {
    marginTop: -32.5,
    marginLeft: -29.5,
    top: "50%",
    left: "50%",
    width: 60,
    height: 65,
    overflow: "hidden",
  },
  cardCardImage: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTeal_200,
    width: 75,
    height: 75,
  },
  courseTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.promptBold,
    width: 200,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  starIcon: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  value: {
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontSize: FontSize.typographyRegularTextXS10_size,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  separatorIcon: {
    width: 3,
    height: 3,
  },
  level: {
    fontFamily: FontFamily.typographyRegularTextXS10,
    fontSize: FontSize.typographyRegularTextXS10_size,
    textAlign: "left",
    color: Color.colorWhite,
  },
  bottomSection: {
    width: 196,
    height: 15,
  },
  cardCardTitleLight: {
    gap: Gap.gap_xs,
  },
  cardCardContent: {
    gap: Gap.gap_2xl,
    alignItems: "center",
    flexDirection: "row",
  },
  iconsAward: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_3xs,
    padding: Padding.p_5xs_5,
    backgroundColor: Color.colorsLightBase2,
    alignItems: "center",
    flexDirection: "row",
  },
  currentProgress: {
    width: 95,
  },
  text: {
    width: 95,
  },
  content: {
    gap: Gap.gap_3xs,
    alignItems: "center",
  },
  cardCardProgress: {
    gap: Gap.gap_md,
    flexDirection: "row",
  },
  cardCardProgressParent: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    gap: Gap.gap_lg,
  },
  cardProgressBarChild: {
    width: 295,
    backgroundColor: Color.colorsLightBase2,
  },
  cardProgressBarItem: {
    backgroundColor: Color.colorsSuccess,
    width: 49,
  },
  cardProgressBar: {
    width: 284,
    display: "none",
    height: 15,
  },
  currentProgress2: {
    width: 100,
  },
  text2: {
    width: 40,
  },
  cardContentDetail: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardPreBuild: {
    top: 375,
    left: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumaquamarine,
    padding: Padding.p_mini,
    gap: Gap.gap_lg,
    overflow: "hidden",
  },
});

export default CardPreBuild4;
