import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import BaseNavigation from "../components/BaseNavigation";
import { useNavigation } from "@react-navigation/native";
import BaseMenuNavigation from "../components/BaseMenuNavigation";
import Base from "../components/Base";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const ImageTracking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.imageTracking}>
      <Image
        style={styles.imageTrackingChild}
        resizeMode="cover"
        source={require("../assets/rectangle-124.png")}
      />
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <View style={styles.buttonGroup}>
        <View style={[styles.button, styles.buttonBorder]}>
          <Text style={[styles.readAloud, styles.tryAgainTypo]}>
            મોટેથી વાંચો (Read Aloud)
          </Text>
        </View>
        <Pressable
          style={[styles.button1, styles.buttonBorder]}
          onPress={() => navigation.navigate("WritingPad")}
        >
          <Text style={[styles.readAloud, styles.tryAgainTypo]}>
            લખવું (Write)
          </Text>
        </Pressable>
      </View>
      <View style={styles.lineParent}>
        <View style={styles.frameChild} />
        <Text style={styles.practice}>પ્રેક્ટિસ કરો (Practice)</Text>
        <View style={styles.frameChild} />
      </View>
      <View style={styles.cardCardImage}>
        <View style={[styles.cardCardImageChild, styles.cardPosition]} />
        <View style={[styles.cardCardImageItem, styles.cardPosition]} />
        <Text style={[styles.imageDetectingContainer, styles.resultClr]}>
          <Text
            style={[styles.imageDetecting, styles.resultTypo]}
          >{`Image Detecting...
`}</Text>
          <Text style={styles.text}>
            <Text style={styles.text1}>(</Text>
            <Text style={styles.text2}>ચિત્ર શોધી રહ્યા છીએ</Text>
            <Text style={styles.text1}>{`...) `}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.baseBadgeParent}>
        <View style={[styles.baseBadge, styles.baseShadowBox]}>
          <Text style={[styles.tryAgain, styles.tryAgainTypo]}>
            ફરીથી પ્રયત્ન કરો  (Try again)
          </Text>
        </View>
        <View style={[styles.baseBadge1, styles.baseShadowBox]}>
          <Text style={[styles.tryAgain, styles.tryAgainTypo]}>
            શોધવું (Search)
          </Text>
        </View>
      </View>
      <BaseMenuNavigation
        icon1={require("../assets/arrowcircleleft.png")}
        writngPad="સાંકેતિક ભાષા શોધ  (Sign Language Detection)"
        houseSimple={require("../assets/housesimple1.png")}
        propWidth={245}
      />
      <Base />
      <View style={[styles.vectorParent, styles.groupChildPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-1445.png")}
        />
        <Text style={[styles.result, styles.resultTypo]}>
          Result (
          <Text style={styles.text4}>પરિણામ</Text>)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBorder: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorGray_300,
    backgroundColor: Color.colorMediumaquamarine,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
  },
  tryAgainTypo: {
    fontWeight: "700",
    fontSize: FontSize.typographyBoldTextDefault14_size,
  },
  cardPosition: {
    left: 8,
    top: 111,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  resultClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  resultTypo: {
    fontSize: FontSize.typographyRegularTextXS10_size,
    fontFamily: FontFamily.pressStart2PRegular,
  },
  baseShadowBox: {
    padding: Padding.p_xs,
    top: 0,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumaquamarine,
    flexDirection: "row",
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
  groupChildPosition: {
    height: 173,
    width: 141,
    marginLeft: -70.5,
    left: "50%",
    position: "absolute",
  },
  imageTrackingChild: {
    top: 228,
    width: 376,
    height: 748,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  readAloud: {
    fontFamily: FontFamily.typographyBoldTextDefault14,
    color: Color.colorsLightBase1,
    textAlign: "left",
  },
  button: {
    width: 169,
  },
  button1: {
    width: 135,
  },
  buttonGroup: {
    top: 683,
    left: 25,
    gap: Gap.gap_2xl,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  frameChild: {
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 101,
    height: 1,
    borderStyle: "solid",
  },
  practice: {
    fontFamily: FontFamily.promptRegular,
    color: Color.colorGray_100,
    width: 127,
    textAlign: "center",
    fontSize: FontSize.typographyBoldTextDefault14_size,
  },
  lineParent: {
    marginLeft: -170.5,
    top: 655,
    justifyContent: "center",
    gap: Gap.gap_sm,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  cardCardImageChild: {
    right: 9,
    backgroundColor: Color.colorTan,
    height: 280,
  },
  cardCardImageItem: {
    backgroundColor: Color.colorGainsboro_200,
    borderColor: Color.colorBlack,
    width: 198,
    height: 34,
    borderWidth: 1,
    top: 111,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  imageDetecting: {
    fontFamily: FontFamily.pressStart2PRegular,
  },
  text1: {
    fontFamily: FontFamily.procionoRegular,
  },
  text2: {
    fontFamily: FontFamily.pressStart2PRegular,
  },
  text: {
    fontSize: 8,
  },
  imageDetectingContainer: {
    top: 117,
    left: 19,
    width: 182,
    textAlign: "left",
  },
  cardCardImage: {
    marginTop: -414,
    marginLeft: -187.5,
    top: "50%",
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: Color.colorTeal_100,
    width: 375,
    height: 401,
    borderRadius: Border.br_mini,
    left: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  tryAgain: {
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  baseBadge: {
    left: 121,
  },
  baseBadge1: {
    left: 0,
  },
  baseBadgeParent: {
    top: 397,
    left: 66,
    width: 242,
    height: 66,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    top: 0,
    width: 141,
    marginLeft: -70.5,
  },
  text4: {
    textDecoration: "underline",
  },
  result: {
    marginLeft: -30.5,
    top: 8,
    width: 60,
    height: 11,
    fontFamily: FontFamily.pressStart2PRegular,
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "center",
    left: "50%",
  },
  vectorParent: {
    top: 473,
  },
  imageTracking: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default ImageTracking;
