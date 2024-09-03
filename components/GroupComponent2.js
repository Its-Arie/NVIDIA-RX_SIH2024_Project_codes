import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={styles.baseBadgeParent}>
      <View style={[styles.baseBadge, styles.baseShadowBox]}>
        <Image
          style={styles.userInterfaceMic}
          resizeMode="cover"
          source={require("../assets/user-interface--mic.png")}
        />
      </View>
      <View style={[styles.baseBadge1, styles.baseShadowBox]}>
        <Image
          style={styles.userInterfaceMic}
          resizeMode="cover"
          source={require("../assets/user-interface--medium-volume1.png")}
        />
      </View>
      <View style={[styles.baseBadge2, styles.baseShadowBox]}>
        <Image
          style={styles.userInterfaceMic}
          resizeMode="cover"
          source={require("../assets/user-interface--reload.png")}
        />
      </View>
      <View style={[styles.baseBadge3, styles.baseShadowBox]}>
        <Image
          style={styles.userInterfaceMic}
          resizeMode="cover"
          source={require("../assets/multimedia--photo1.png")}
        />
      </View>
      <View style={[styles.baseBadge4, styles.baseShadowBox]}>
        <Text style={styles.submit}>મોકલો Submit)</Text>
      </View>
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
    borderRadius: Border.br_11xl,
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
  },
  userInterfaceMic: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  baseBadge: {
    left: 130,
  },
  baseBadge1: {
    left: 196,
  },
  baseBadge2: {
    left: 0,
  },
  baseBadge3: {
    left: 66,
  },
  submit: {
    fontSize: FontSize.typographyRegularTextXS10_size,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  baseBadge4: {
    left: 264,
    width: 57,
    height: 48,
  },
  baseBadgeParent: {
    top: 619,
    left: 27,
    width: 321,
    height: 48,
    position: "absolute",
  },
});

export default GroupComponent2;
