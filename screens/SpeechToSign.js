import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GroupComponent1 from "../components/GroupComponent1";
import BaseNavigation from "../components/BaseNavigation";
import CardCardImage from "../components/CardCardImage";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SpeechToSign = () => {
  return (
    <View style={styles.speechToSign}>
      <Image
        style={styles.speechToSignChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <GroupComponent1 />
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle1.png")}
      />
      <Image
        style={styles.speechToSignItem}
        resizeMode="cover"
        source={require("../assets/rectangle-1444.png")}
      />
      <CardCardImage signToText="Speech to Sign" propWidth={139} />
      <View style={styles.baseBadgeParent}>
        <View style={[styles.baseBadge, styles.baseShadowBox]}>
          <Text style={styles.reverse}>ઉલટું (Reverse)</Text>
        </View>
        <View style={[styles.baseBadge1, styles.baseShadowBox]}>
          <Image
            style={styles.userInterfaceMic}
            resizeMode="cover"
            source={require("../assets/user-interface--mic.png")}
          />
        </View>
      </View>
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft.png")}
        writngPad="સહી કરવા માટેનું બોલવું/બોલવા માટે સહી કરવી (Speech to Sign / Sign to Speech)"
        houseSimple={require("../assets/housesimple1.png")}
        propWidth={263}
      />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  baseShadowBox: {
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumaquamarine,
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
  speechToSignChild: {
    top: 228,
    width: 376,
    height: 748,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  speechToSignItem: {
    marginLeft: -170.5,
    top: 407,
    left: "50%",
    borderRadius: Border.br_xl,
    width: 341,
    height: 252,
    position: "absolute",
  },
  reverse: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  baseBadge: {
    top: 0,
    left: 0,
  },
  userInterfaceMic: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  baseBadge1: {
    top: 7,
    left: 103,
  },
  baseBadgeParent: {
    top: 337,
    left: 112,
    width: 151,
    height: 66,
    position: "absolute",
  },
  speechToSign: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default SpeechToSign;
