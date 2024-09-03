import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import BaseNavigation from "../components/BaseNavigation";
import CardCardImage from "../components/CardCardImage";
import GroupComponent2 from "../components/GroupComponent2";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LearnWords = () => {
  return (
    <View style={styles.learnWords}>
      <Image
        style={styles.learnWordsChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text
          style={[styles.remark, styles.remarkFlexBox]}
        >{`ટિપ્પણી (Remark) : `}</Text>
      </View>
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <Image
        style={[styles.learnWordsItem, styles.learnPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1442.png")}
      />
      <View style={[styles.learnWordsInner, styles.learnPosition]} />
      <Text style={[styles.writeHere, styles.remarkFlexBox]}>Write Here</Text>
      <CardCardImage signToText="Words" propWidth={72} />
      <GroupComponent2 />
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft.png")}
        writngPad="શબ્દો શીખો (Learn Words)"
        houseSimple={require("../assets/housesimple1.png")}
        propWidth={245}
      />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  remarkFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  learnPosition: {
    top: 357,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  learnWordsChild: {
    top: 228,
    left: 0,
    width: 376,
    height: 748,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupChild: {
    marginLeft: -91,
    top: 0,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    height: 34,
    width: 182,
    left: "50%",
    position: "absolute",
  },
  remark: {
    top: 11,
    fontSize: FontSize.typographyRegularTextXS10_size,
    fontFamily: FontFamily.pTSansCaption,
    color: Color.colorBlack,
    left: 17,
  },
  rectangleParent: {
    marginLeft: -80.5,
    top: 689,
    height: 34,
    width: 182,
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
  learnWordsItem: {
    marginLeft: -170.5,
    width: 341,
    height: 254,
    left: "50%",
    top: 357,
  },
  learnWordsInner: {
    borderColor: Color.colorGray_300,
    width: 112,
    height: 35,
    left: 17,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  writeHere: {
    top: 366,
    left: 30,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontFamily: FontFamily.prostoOneRegular,
    color: Color.colorWhite,
  },
  learnWords: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default LearnWords;
