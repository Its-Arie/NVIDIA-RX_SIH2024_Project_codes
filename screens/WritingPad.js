import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import BaseNavigation from "../components/BaseNavigation";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const WritingPad = () => {
  return (
    <View style={styles.writingPad}>
      <Image
        style={styles.writingPadChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.remark}>{`ટિપ્પણી (Remark) : `}</Text>
      </View>
      <Image
        style={styles.writingPadItem}
        resizeMode="cover"
        source={require("../assets/rectangle-144.png")}
      />
      <View style={[styles.cardCardImage, styles.cardLayout]}>
        <View style={[styles.cardCardImageChild, styles.cardLayout]} />
      </View>
      <View style={[styles.baseBadge, styles.baseShadowBox]}>
        <Text style={[styles.tryAgain, styles.nextTypo]}>
          ફરીથી પ્રયત્ન કરો  (Try again)
        </Text>
      </View>
      <View style={[styles.baseBadge1, styles.baseShadowBox]}>
        <Text style={[styles.next, styles.nextTypo]}>આગળનું (Next)</Text>
      </View>
      <View style={[styles.baseBadge2, styles.baseShadowBox]}>
        <Text style={[styles.tryAgain, styles.nextTypo]}>ચકાસો (Check)</Text>
      </View>
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft.png")}
        writngPad="પેડ લખી રહ્યા છીએ  (Writng Pad)"
        houseSimple={require("../assets/housesimple1.png")}
      />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  baseShadowBox: {
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_300,
    backgroundColor: Color.colorMediumaquamarine,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  nextTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.promptBold,
    fontWeight: "700",
  },
  writingPadChild: {
    top: 219,
    left: -1,
    width: 376,
    height: 748,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupChild: {
    marginLeft: -105,
    top: 0,
    backgroundColor: Color.colorGainsboro_200,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    height: 34,
    width: 210,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  remark: {
    top: 11,
    left: 20,
    fontSize: FontSize.typographyRegularTextXS10_size,
    fontFamily: FontFamily.pTSansCaption,
    color: Color.colorBlack,
    textAlign: "left",
    width: 91,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -105.5,
    top: 705,
    height: 34,
    width: 210,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  writingPadItem: {
    marginLeft: -177.5,
    top: 375,
    borderRadius: Border.br_xl,
    width: 354,
    height: 257,
    left: "50%",
    position: "absolute",
  },
  cardCardImageChild: {
    top: 111,
    right: 9,
    left: 8,
    backgroundColor: "#2ede4d",
    height: 209,
  },
  cardCardImage: {
    marginTop: -414,
    marginLeft: -187.5,
    top: "50%",
    backgroundColor: Color.colorTeal_100,
    width: 375,
    height: 331,
    left: "50%",
  },
  tryAgain: {
    fontSize: FontSize.small_size,
  },
  baseBadge: {
    left: 45,
    top: 642,
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_300,
    backgroundColor: Color.colorMediumaquamarine,
  },
  next: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
  },
  baseBadge1: {
    marginLeft: -59.5,
    top: 326,
    left: "50%",
  },
  baseBadge2: {
    left: 257,
    top: 642,
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_300,
    backgroundColor: Color.colorMediumaquamarine,
  },
  writingPad: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default WritingPad;
