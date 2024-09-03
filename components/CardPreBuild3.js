import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardPreBuild3 = ({
  cardCardImage,
  prop,
  signLanguageDetection,
  currentProgressTop,
  onCardPreBuildPress,
}) => {
  const cardPreBuild3Style = useMemo(() => {
    return {
      ...getStyleValue("top", currentProgressTop),
    };
  }, [currentProgressTop]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.cardPreBuild, cardPreBuild3Style]}
      onPress={onCardPreBuildPress}
    >
      <View style={styles.cardCardContent}>
        <Image
          style={styles.cardCardImage}
          resizeMode="cover"
          source={cardCardImage}
        />
        <View>
          <Text style={styles.courseTitle}>
            <Text style={styles.text}>{prop}</Text>
            <Text style={styles.signLanguageDetection}>
              {signLanguageDetection}
            </Text>
          </Text>
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
            <Text style={[styles.text1, styles.textTypo]}>50%</Text>
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
            <Text style={[styles.text1, styles.textTypo]}>50%</Text>
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
          <Text style={[styles.text3, styles.textTypo]}>50%</Text>
        </View>
        <View style={styles.cardContentDetail}>
          <Text style={[styles.currentProgress2, styles.currentTypo]}>
            Current Progress
          </Text>
          <Text style={[styles.text3, styles.textTypo]}>50%</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
  cardCardImage: {
    borderRadius: Border.br_mini,
    width: 52,
    height: 52,
  },
  text: {
    fontSize: FontSize.small_size,
  },
  signLanguageDetection: {
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  courseTitle: {
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    width: 200,
    textAlign: "left",
  },
  cardCardContent: {
    width: 276,
    height: 36,
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
    padding: Padding.p_5xs_5,
    backgroundColor: Color.colorsLightBase2,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  currentProgress: {
    width: 95,
  },
  text1: {
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
    height: 15,
    display: "none",
  },
  currentProgress2: {
    width: 100,
  },
  text3: {
    width: 40,
  },
  cardContentDetail: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardPreBuild: {
    marginLeft: -156.5,
    top: 117,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    backgroundColor: Color.colorMediumaquamarine,
    width: 313,
    height: 66,
    padding: Padding.p_mini,
    gap: Gap.gap_lg,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
});

export default CardPreBuild3;
