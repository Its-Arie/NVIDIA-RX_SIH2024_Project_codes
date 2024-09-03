import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import GroupComponent1 from "../components/GroupComponent1";
import BaseNavigation from "../components/BaseNavigation";
import CardCardImage from "../components/CardCardImage";
import { useNavigation } from "@react-navigation/native";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const SignToText = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signToText}>
      <Image
        style={styles.signToTextChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <GroupComponent1 />
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle1.png")}
      />
      <Image
        style={[styles.signToTextItem, styles.reversePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1441.png")}
      />
      <CardCardImage signToText="Sign to Text" />
      <Text style={[styles.reverse, styles.reverseTypo]}>ઉલટું (Reverse)</Text>
      <View style={styles.baseBadgeParent}>
        <Pressable
          style={[styles.baseBadge, styles.baseShadowBox]}
          onPress={() => navigation.navigate("TextToSign")}
        >
          <Text style={[styles.reverse1, styles.reverseTypo]}>
            ઉલટું (Reverse)
          </Text>
        </Pressable>
        <View style={[styles.baseBadge1, styles.baseShadowBox]}>
          <Image
            style={styles.multimediaPhoto}
            resizeMode="cover"
            source={require("../assets/multimedia--photo.png")}
          />
        </View>
      </View>
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft.png")}
        writngPad="લખાણમાં સહી કરવા/ સહી કરવા માટેનું લખાણ (Text to Sign / Sign to Text)"
        houseSimple={require("../assets/housesimple1.png")}
        propWidth={259}
      />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  reversePosition: {
    left: "50%",
    position: "absolute",
  },
  reverseTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.promptBold,
    fontWeight: "700",
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
  signToTextChild: {
    top: 228,
    width: 376,
    height: 748,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  signToTextItem: {
    marginLeft: -170.5,
    top: 411,
    borderRadius: Border.br_xl,
    width: 341,
    height: 249,
  },
  reverse: {
    marginLeft: -68.5,
    top: 354,
    fontSize: FontSize.typographyRegularTextXS10_size,
    left: "50%",
    position: "absolute",
  },
  reverse1: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
  },
  baseBadge: {
    left: 0,
  },
  multimediaPhoto: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  baseBadge1: {
    left: 126,
  },
  baseBadgeParent: {
    top: 337,
    left: 84,
    width: 190,
    height: 66,
    position: "absolute",
  },
  signToText: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default SignToText;
