import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap, Padding } from "../GlobalStyles";

const BaseMenuNavigation4 = ({ mathematics }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.baseMenuNavigation}>
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.arrowcircleleft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowcircleleft2.png")}
            />
          </Pressable>
          <Text style={styles.mathematics}>{mathematics}</Text>
        </View>
        <View style={styles.frameChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowcircleleft: {
    width: 32,
    height: 32,
  },
  mathematics: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 245,
  },
  frameParent: {
    flexDirection: "row",
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
  frameChild: {
    width: 50,
    height: 40,
  },
  baseMenuNavigation: {
    position: "absolute",
    top: 44,
    left: 0,
    width: 375,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
});

export default BaseMenuNavigation4;
