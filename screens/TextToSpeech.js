import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GroupComponent1 from "../components/GroupComponent1";
import BaseNavigation from "../components/BaseNavigation";
import CardCardImage from "../components/CardCardImage";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const TextToSpeech = () => {
  return (
    <View style={styles.textToSpeech}>
      <Image
        style={styles.textToSpeechChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <GroupComponent1 />
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <Image
        style={[styles.textToSpeechItem, styles.textToSpeechItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-145.png")}
      />
      <Image
        style={[
          styles.userInterfaceMediumVolume,
          styles.textToSpeechItemPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/user-interface--medium-volume.png")}
      />
      <CardCardImage signToText="Text to Speech" propWidth={142} />
      <View style={styles.baseBadgeParent}>
        <View style={[styles.baseBadge, styles.baseShadowBox]}>
          <Text style={styles.reverse}>ઉલટું (Reverse)</Text>
        </View>
        <View style={[styles.baseBadge1, styles.baseShadowBox]}>
          <Text style={styles.reverse}>શોધવું (Search)</Text>
        </View>
      </View>
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft.png")}
        writngPad="બોલવા માટેનું લખાણ / લખાણમાં બોલી (Text to Speech / Speech to Text)"
        houseSimple={require("../assets/housesimple1.png")}
        propWidth={245}
      />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  textToSpeechItemPosition: {
    left: "50%",
    position: "absolute",
  },
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
    top: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textToSpeechChild: {
    top: 228,
    width: 376,
    height: 748,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textToSpeechItem: {
    marginLeft: -170.5,
    top: 410,
    borderRadius: Border.br_xl,
    width: 341,
    height: 248,
  },
  userInterfaceMediumVolume: {
    marginLeft: -44.5,
    top: 489,
    width: 89,
    height: 89,
    overflow: "hidden",
  },
  reverse: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  baseBadge: {
    left: 0,
  },
  baseBadge1: {
    left: 126,
  },
  baseBadgeParent: {
    top: 337,
    left: 84,
    width: 207,
    height: 66,
    position: "absolute",
  },
  textToSpeech: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default TextToSpeech;
