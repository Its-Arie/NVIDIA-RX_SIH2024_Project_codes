import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import BaseNavigation from "../components/BaseNavigation";
import BaseMenuNavigation4 from "../components/BaseMenuNavigation4";
import CardPreBuild from "../components/CardPreBuild";
import Base from "../components/Base";
import {
  Border,
  Color,
  Gap,
  Padding,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const Mathematics = () => {
  return (
    <View style={styles.mathematics}>
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <BaseMenuNavigation4 mathematics="ગણિત (Mathematics)" />
      <View style={styles.cardPreBuildParent}>
        <CardPreBuild prop="+" courseTitle="ઉમેરો  (Addition)" />
        <CardPreBuild
          prop="-"
          courseTitle="બાદબાકી (Subtraction)"
          propMarginLeft={13.5}
          propMarginTop={-253}
          propTop="50%"
          propMarginTop1={-60}
        />
        <CardPreBuild
          prop="×"
          courseTitle="ગુણાકાર (Multiplication)"
          propMarginLeft={-163.5}
          propMarginTop={-75}
          propTop="50%"
          propMarginTop1={-60}
        />
        <View style={styles.cardPreBuild}>
          <View style={[styles.cardCardContent, styles.cardContentFlexBox]}>
            <View style={[styles.cardCardImage, styles.cardLayout1]}>
              <Text style={[styles.text, styles.textPosition]}>÷</Text>
            </View>
          </View>
          <Text style={[styles.courseTitle, styles.cardLayout]}>
            વિભાગ (Division)
          </Text>
        </View>
        <View style={[styles.cardPreBuild1, styles.cardShadowBox]}>
          <View style={[styles.cardCardContent1, styles.cardLayout]}>
            <View style={[styles.cardCardImage, styles.cardLayout1]}>
              <Text style={[styles.text1, styles.textPosition]}>
                1×1=1 1×2=2 1×3=3
              </Text>
            </View>
          </View>
          <Text style={[styles.courseTitle, styles.cardLayout]}>
            આંકડાકીય કોષ્ટક (Table)
          </Text>
        </View>
        <View style={[styles.cardPreBuild2, styles.cardShadowBox]}>
          <View style={[styles.cardCardContent, styles.cardContentFlexBox]}>
            <Image
              style={styles.cardLayout1}
              resizeMode="cover"
              source={require("../assets/card--card-image.png")}
            />
          </View>
          <Text style={[styles.courseTitle, styles.cardLayout]}>
            રેન્ડમ સમસ્યા (Random Problem)
          </Text>
        </View>
      </View>
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardLayout1: {
    height: 70,
    width: 114,
    borderRadius: Border.br_mini,
  },
  textPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  cardLayout: {
    width: 120,
    alignItems: "center",
  },
  cardShadowBox: {
    marginTop: 103,
    gap: Gap.gap_lg,
    padding: Padding.p_mini,
    height: 150,
    width: 150,
    backgroundColor: Color.colorMediumaquamarine,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -20,
    marginLeft: -19,
    fontSize: 60,
    lineHeight: 40,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
  },
  cardCardImage: {
    backgroundColor: Color.colorTeal_200,
  },
  cardCardContent: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  courseTitle: {
    fontSize: FontSize.small_size,
    fontFamily: FontFamily.promptBold,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    color: Color.colorWhite,
    width: 120,
    fontWeight: "700",
  },
  cardPreBuild: {
    marginTop: -75,
    gap: Gap.gap_lg,
    padding: Padding.p_mini,
    height: 150,
    width: 150,
    backgroundColor: Color.colorMediumaquamarine,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: 13.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: -30,
    top: 2,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pTMonoRegular,
  },
  cardCardContent1: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 120,
  },
  cardPreBuild1: {
    marginTop: 103,
    marginLeft: -163.5,
  },
  cardPreBuild2: {
    marginLeft: 13.5,
    marginTop: 103,
  },
  cardPreBuildParent: {
    marginTop: -271,
    width: 327,
    height: 506,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: -163.5,
  },
  mathematics: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Mathematics;
