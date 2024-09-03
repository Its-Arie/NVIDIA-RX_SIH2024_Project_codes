import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Base from "../components/Base";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Btn from "../components/Btn";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const AuthMain1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.authMain2, styles.iconLayout]}>
      <Base />
      <Text style={[styles.createAccountBy, styles.authMain2ChildPosition]}>
        Create account by using email
      </Text>
      <LinearGradient
        style={[styles.button, styles.buttonPosition]}
        locations={[0, 1]}
        colors={["#21c8f6", "#637bff"]}
        useAngle={true}
        angle={-70.18}
      >
        <Pressable
          style={[styles.pressable, styles.button1ShadowBox]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.signUp}>Sign up</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.button1, styles.button1ShadowBox]}
        locations={[0, 0, 1]}
        colors={["#21c8f6", "#ffc73c", "#f19a1a"]}
        useAngle={true}
        angle={-88.41}
      >
        <Text style={styles.signUp}>Sign up with Google</Text>
      </LinearGradient>
      <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
      <View style={[styles.authMain2Child, styles.authMain2ChildPosition]} />
      <GroupComponent />
      <Pressable
        style={styles.arrowcircleleft}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowcircleleft1.png")}
        />
      </Pressable>
      <Btn
        text="E-mail"
        btnPosition="absolute"
        btnWidth={253}
        btnHeight={47}
        btnMarginLeft={-126.5}
        btnTop={291}
        btnLeft="50%"
      />
      <Btn
        text="Password"
        btnPosition="absolute"
        btnWidth={253}
        btnHeight={47}
        btnMarginLeft={-126.5}
        btnTop={353}
        btnLeft="50%"
      />
      <Btn
        text="Confirm Password"
        btnPosition="absolute"
        btnWidth={253}
        btnHeight={47}
        btnMarginLeft={-126.5}
        btnTop={415}
        btnLeft="50%"
      />
      <Text style={[styles.havingTroubleLogging, styles.signInTypo]}>
        Having trouble logging in?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  authMain2ChildPosition: {
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    width: 325,
    left: "50%",
    position: "absolute",
  },
  button1ShadowBox: {
    backgroundColor: Color.textColorDownBar1,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -162.5,
    borderRadius: Border.br_21xl,
  },
  signInTypo: {
    opacity: 0.5,
    color: Color.black,
    fontFamily: FontFamily.small,
    fontSize: FontSize.small_size,
    textAlign: "left",
    position: "absolute",
  },
  createAccountBy: {
    marginLeft: -101.5,
    top: 227,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontStyle: "italic",
    fontFamily: FontFamily.aBeeZeeItalic,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signUp: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.promptRegular,
    color: Color.colorsLightBase1,
    textAlign: "left",
  },
  pressable: {
    width: "100%",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -162.5,
  },
  button: {
    top: 493,
  },
  button1: {
    top: 569,
    width: 325,
    left: "50%",
    position: "absolute",
  },
  signIn: {
    top: 729,
    left: 165,
  },
  authMain2Child: {
    marginLeft: -33.5,
    top: 706,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 67,
    height: 2,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowcircleleft: {
    left: "8.27%",
    top: "8.25%",
    right: "83.2%",
    bottom: "87.81%",
    width: "8.53%",
    height: "3.94%",
    position: "absolute",
  },
  havingTroubleLogging: {
    top: 669,
    left: 107,
  },
  authMain2: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    height: 812,
    borderRadius: Border.br_21xl,
    overflow: "hidden",
  },
});

export default AuthMain1;
