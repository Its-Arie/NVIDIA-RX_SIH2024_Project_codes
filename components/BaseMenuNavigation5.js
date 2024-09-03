import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BaseMenuNavigation5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.baseMenuNavigation}>
      <View
        style={[
          styles.baseMenuNavigationInner,
          styles.arrowcircleleftParentLayout,
        ]}
      >
        <View
          style={[
            styles.arrowcircleleftParent,
            styles.arrowcircleleftParentLayout,
          ]}
        >
          <Pressable
            style={styles.arrowcircleleft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowcircleleft.png")}
            />
          </Pressable>
          <Text
            style={[styles.text, styles.textTypo]}
          >{`ગુજરાતી શીખવાના માર્ગમાં પ્રગતિ `}</Text>
          <View style={styles.frameWrapper}>
            <View style={styles.frameChild} />
          </View>
        </View>
      </View>
      <Text style={[styles.progressInGujarati, styles.textTypo]}>
        (Progress in Gujarati Learning Path)
      </Text>
      <View style={styles.baseMenuNavigationChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowcircleleftParentLayout: {
    height: 32,
    width: 297,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    height: "100%",
  },
  arrowcircleleft: {
    left: "0%",
    top: "0%",
    right: "89.23%",
    bottom: "0%",
    width: "10.77%",
    height: "100%",
    position: "absolute",
  },
  text: {
    left: 52,
    fontSize: FontSize.size_base,
    width: 216,
    top: 0,
  },
  frameChild: {
    height: 21,
    width: 31,
  },
  frameWrapper: {
    top: 4,
    left: 142,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 31,
    position: "absolute",
  },
  arrowcircleleftParent: {
    top: 0,
    left: 0,
  },
  baseMenuNavigationInner: {
    top: 10,
    left: 19,
  },
  progressInGujarati: {
    top: 30,
    left: 79,
    fontSize: FontSize.size_xs_6,
    width: 208,
  },
  baseMenuNavigationChild: {
    top: 7,
    left: 299,
    width: 50,
    height: 40,
    position: "absolute",
  },
  baseMenuNavigation: {
    top: 36,
    width: 375,
    height: 52,
    left: 0,
    position: "absolute",
  },
});

export default BaseMenuNavigation5;
