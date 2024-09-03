import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import {
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardPreBuild1 = ({
  cardCardImage,
  courseTitle,
  propMarginLeft,
  propHeight,
}) => {
  const cardPreBuild1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const courseTitleStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View style={[styles.cardPreBuild, cardPreBuild1Style]}>
      <View style={[styles.cardCardContent, styles.cardFlexBox]}>
        <Image
          style={styles.cardCardImage}
          resizeMode="cover"
          source={cardCardImage}
        />
      </View>
      <Text style={[styles.courseTitle, styles.cardFlexBox, courseTitleStyle]}>
        {courseTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFlexBox: {
    alignItems: "center",
    width: 100,
  },
  cardCardImage: {
    borderRadius: Border.br_mini,
    width: 114,
    height: 70,
  },
  cardCardContent: {
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseTitle: {
    fontSize: FontSize.small_size,
    fontFamily: FontFamily.procionoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  cardPreBuild: {
    position: "absolute",
    marginTop: -67,
    marginLeft: 18.5,
    top: "50%",
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumaquamarine,
    width: 130,
    height: 134,
    padding: Padding.p_mini,
    gap: Gap.gap_lg,
  },
});

export default CardPreBuild1;
