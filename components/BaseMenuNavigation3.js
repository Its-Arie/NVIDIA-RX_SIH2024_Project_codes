import React, { useMemo } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BaseMenuNavigation3 = ({ one, propWidth }) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const navigation = useNavigation();

  return (
    <View style={styles.baseMenuNavigation}>
      <View
        style={[
          styles.baseMenuNavigationInner,
          styles.arrowcircleleftParentLayout,
          frameView1Style,
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
          <Text style={[styles.one, styles.oneTypo]}>{one}</Text>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.oneTypo]}>
              સંખ્યાઓ ( Numbers )
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.baseMenuNavigationChild}>
        <Pressable
          style={styles.housesimpleWrapper}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={styles.housesimpleIcon}
            resizeMode="cover"
            source={require("../assets/housesimple1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowcircleleftParentLayout: {
    width: 297,
    height: 32,
    position: "absolute",
  },
  oneTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
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
  one: {
    top: -3,
    left: 52,
    fontSize: FontSize.size_base,
    width: 245,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xs_6,
    width: 237,
    height: 15,
  },
  wrapper: {
    top: 20,
    left: 60,
    position: "absolute",
  },
  arrowcircleleftParent: {
    top: 0,
    height: 32,
    left: 0,
  },
  baseMenuNavigationInner: {
    top: 10,
    left: 19,
    height: 32,
  },
  housesimpleIcon: {
    width: 32,
    height: 32,
  },
  housesimpleWrapper: {
    marginTop: -16,
    marginLeft: -15.5,
    top: "50%",
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  baseMenuNavigationChild: {
    top: 7,
    left: 299,
    width: 50,
    height: 40,
    position: "absolute",
  },
  baseMenuNavigation: {
    top: 44,
    width: 375,
    height: 52,
    left: 0,
    position: "absolute",
  },
});

export default BaseMenuNavigation3;
