import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import BaseNavigation from "../components/BaseNavigation";
import CardCardImage from "../components/CardCardImage";
import GroupComponent1 from "../components/GroupComponent1";
import { useNavigation } from "@react-navigation/native";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const TextToSign = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.textToSign}>
      <Image
        style={styles.textToSignChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <Image
        style={styles.textToSignItem}
        resizeMode="cover"
        source={require("../assets/rectangle-1443.png")}
      />
      <CardCardImage signToText="Text to Sign" propWidth={120} />
      <GroupComponent1 />
      <View style={styles.baseBadgeParent}>
        <Pressable
          style={[styles.baseBadge, styles.baseShadowBox]}
          onPress={() => navigation.navigate("SignToText")}
        >
          <Text style={styles.reverse}>ઉલટું (Reverse)</Text>
        </Pressable>
        <View style={[styles.baseBadge1, styles.baseShadowBox]}>
          <Text style={styles.reverse}>શોધવું (Search)</Text>
        </View>
      </View>
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft3.png")}
        writngPad="લખાણમાં સહી કરવા/ સહી કરવા માટેનું લખાણ (Text to Sign / Sign to Text)"
        houseSimple={require("../assets/housesimple2.png")}
        propWidth={260}
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
    top: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textToSignChild: {
    top: 228,
    width: 376,
    height: 748,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textToSignItem: {
    marginLeft: -170.5,
    top: 411,
    left: "50%",
    borderRadius: Border.br_xl,
    width: 341,
    height: 251,
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
  textToSign: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default TextToSign;
