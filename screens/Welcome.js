import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import MaskGroup from "../components/MaskGroup";
import Base from "../components/Base";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome1}>
      <MaskGroup />
      <View style={styles.onboarding6}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={styles.onboarding6}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/onboarding-4-backgroundmask.png")}
          />
          <Base />
          <View style={styles.maskGroup52}>
            <Image
              style={[styles.maskGroup52Child, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/group-142.png")}
            />
            <View style={[styles.skip, styles.skipPosition]}>
              <Pressable
                style={styles.onboarding6}
                onPress={() => navigation.navigate("AuthMain")}
              >
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/skip-background1.png")}
                />
                <Text style={styles.skip2}>Skip</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.welcome1Child, styles.welcome1ChildPosition]} />
      <View style={[styles.vn202409012011401, styles.welcome1ChildPosition]} />
      <View style={[styles.welcome1Inner, styles.groupWrapperLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <GroupComponent propTop={0} propLeft={0} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  skipPosition: {
    right: "0%",
    top: "0%",
  },
  welcome1ChildPosition: {
    top: 92,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 55,
    width: 251,
    position: "absolute",
  },
  vectorIcon: {
    right: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  maskGroup52Child: {
    height: "0.93%",
    width: "32.35%",
    top: "99.07%",
    right: "67.65%",
  },
  skip2: {
    top: "30%",
    left: "18.44%",
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  onboarding6: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  skip: {
    height: "7.45%",
    width: "22.06%",
    bottom: "92.55%",
    left: "77.94%",
    position: "absolute",
  },
  maskGroup52: {
    height: "66.13%",
    width: "54.4%",
    top: "7.39%",
    right: "4.27%",
    bottom: "26.48%",
    left: "41.33%",
    position: "absolute",
  },
  welcome1Child: {
    left: 8,
    width: 373,
    height: 339,
  },
  vn202409012011401: {
    width: 375,
    height: 586,
    left: 0,
  },
  groupWrapper: {
    top: 0,
    left: 0,
  },
  welcome1Inner: {
    top: 78,
    left: 62,
  },
  welcome1: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Welcome;
