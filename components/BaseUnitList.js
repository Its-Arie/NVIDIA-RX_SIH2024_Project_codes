import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseUnitList = ({
  prop,
  iconactiondoneOutline24px,
  propTop,
  propLeft,
}) => {
  const baseUnitList1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.baseUnitList, styles.baseFlexBox, baseUnitList1Style]}>
      <View style={styles.baseFlexBox}>
        <View>
          <Text style={styles.text}>{prop}</Text>
        </View>
      </View>
      <Image
        style={styles.iconactiondoneOutline24px}
        resizeMode="cover"
        source={iconactiondoneOutline24px}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.typographyBoldTextDefault14,
    color: Color.colorsDarkBase1,
    textAlign: "left",
    width: 237,
    height: 15,
  },
  iconactiondoneOutline24px: {
    width: 24,
    height: 20,
  },
  baseUnitList: {
    position: "absolute",
    top: 428,
    left: 31,
    width: 312,
    height: 40,
    paddingHorizontal: Padding.p_xl_8,
    paddingVertical: 9,
    gap: Gap.gap_xl,
  },
});

export default BaseUnitList;
