import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Base from "../components/Base";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Btn from "../components/Btn";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const AuthMain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.authMain1}>
      <Base />
      <Text
        style={styles.turningYourGestures}
      >{`Turning your gestures into language

"તમારા ઇશારાઓને ભાષામાં ફેરવતા."`}</Text>
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
          <Text style={styles.login}>Login</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.button1, styles.button1ShadowBox]}
        locations={[0, 0, 1]}
        colors={["#21c8f6", "#ffc73c", "#f19a1a"]}
        useAngle={true}
        angle={-88.41}
      >
        <Text style={styles.login}>Sign in with Google</Text>
      </LinearGradient>
      <Text style={[styles.havingTroubleLogging, styles.signUpTypo]}>
        Having trouble logging in?
      </Text>
      <View style={styles.authMain1Child} />
      <GroupComponent propTop={161} propLeft={73} />
      <Pressable
        style={styles.signUpWrapper}
        onPress={() => navigation.navigate("AuthMain1")}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      </Pressable>
      <Btn
        text="E-mail or Phone No."
        btnPosition="absolute"
        btnWidth={253}
        btnHeight={47}
        btnMarginLeft={-126.5}
        btnTop={336}
        btnLeft="50%"
      />
      <Btn
        text="Password"
        btnPosition="absolute"
        btnWidth={253}
        btnHeight={47}
        btnMarginLeft="unset"
        btnTop={406}
        btnLeft={62}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    width: 325,
    left: 30,
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
    borderRadius: Border.br_21xl,
  },
  signUpTypo: {
    opacity: 0.5,
    color: Color.black,
    fontFamily: FontFamily.small,
    textAlign: "left",
    fontSize: FontSize.small_size,
    position: "absolute",
  },
  turningYourGestures: {
    marginLeft: -105.5,
    top: 261,
    fontFamily: FontFamily.epilogueRegular,
    color: "#647cff",
    textAlign: "center",
    fontSize: FontSize.small_size,
    left: "50%",
    position: "absolute",
  },
  login: {
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
  },
  button: {
    top: 492,
  },
  button1: {
    top: 569,
    width: 325,
    left: 30,
    position: "absolute",
  },
  havingTroubleLogging: {
    top: 661,
    left: 111,
  },
  authMain1Child: {
    marginLeft: -33.5,
    top: 706,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 67,
    height: 2,
    left: "50%",
    position: "absolute",
  },
  signUp: {
    top: 7,
    left: 29,
  },
  signUpWrapper: {
    top: 722,
    left: 136,
    borderRadius: Border.br_xl,
    backgroundColor: "#44a0fb",
    width: 110,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  authMain1: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_21xl,
    width: "100%",
  },
});

export default AuthMain;
