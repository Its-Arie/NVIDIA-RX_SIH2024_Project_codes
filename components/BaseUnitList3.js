import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseUnitList3 = ({ ka, propTop, propLeft, onBaseUnitListPress }) => {
  const baseUnitList2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.baseUnitList, styles.baseFlexBox, baseUnitList2Style]}
      onPress={onBaseUnitListPress}
    >
      <View style={styles.baseFlexBox}>
        <View>
          <Text style={styles.ka}>{ka}</Text>
        </View>
      </View>
      <Image
        style={styles.iconactiondoneOutline24px}
        resizeMode="cover"
        source={require("../assets/iconactiondone-outline-24px2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  ka: {
    fontSize: FontSize.size_xs_6,
    fontFamily: FontFamily.typographyRegularTextXS10,
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
    top: 667,
    left: 32,
    width: 312,
    height: 40,
    paddingHorizontal: Padding.p_xl_8,
    paddingVertical: 9,
    gap: Gap.gap_xl,
  },
});

export default BaseUnitList3;
