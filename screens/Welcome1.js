import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Welcome1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome3}>
      <View
        style={[
          styles.onboarding4BackgroundmaskParent,
          styles.onboarding4Position,
        ]}
      >
        <Image
          style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/onboarding-4-backgroundmask.png")}
        />
        <View style={styles.maskGroup24}>
          <View style={[styles.button, styles.onboarding4Position]}>
            <Pressable
              style={styles.buttonprimary}
              onPress={() => navigation.navigate("AuthMain1")}
            >
              <Image
                style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/buttonprimary-background.png")}
              />
              <View style={styles.signUpWrapper}>
                <Text style={styles.signUp}>Sign up</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.buttonsecondary, styles.onboarding4Position]}
              onPress={() => navigation.navigate("AuthMain")}
            >
              <Image
                style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/buttonsecondary-background.png")}
              />
              <View style={styles.logInWrapper}>
                <Text style={styles.signUp}>Log in</Text>
              </View>
            </Pressable>
          </View>
          <Image
            style={[styles.pavigationIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pavigation.png")}
          />
          <View style={[styles.text, styles.textPosition]}>
            <Text
              style={[styles.studyAccordingTo, styles.studyTypo]}
            >{`Study according to the 
study plan, make study 
more motivated`}</Text>
          </View>
          <View style={styles.title}>
            <Text
              style={[styles.createYourOwn, styles.createTypo]}
            >{`Create your own 
study plan`}</Text>
          </View>
          <Image
            style={[styles.illustrationIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/illustration.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.onboarding4BackgroundmaskParent,
          styles.onboarding4Position,
        ]}
      >
        <Image
          style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <View
          style={[
            styles.onboarding4BackgroundmaskParent,
            styles.onboarding4Position,
          ]}
        >
          <Image
            style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/onboarding-4-backgroundmask.png")}
          />
          <View style={styles.maskGroup24}>
            <View style={[styles.button, styles.onboarding4Position]}>
              <View style={styles.buttonprimary}>
                <Image
                  style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/buttonprimary-background.png")}
                />
                <View style={styles.signUpWrapper}>
                  <Text style={styles.signUp}>Sign up</Text>
                </View>
              </View>
              <View
                style={[styles.buttonsecondary, styles.onboarding4Position]}
              >
                <Image
                  style={[styles.onboarding4Backgroundmask, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/buttonsecondary-background.png")}
                />
                <View style={styles.logInWrapper}>
                  <Text style={styles.signUp}>Log in</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.pavigationIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/pavigation.png")}
            />
            <View style={[styles.text1, styles.textPosition]}>
              <Text
                style={[styles.studyAccordingTo1, styles.studyTypo]}
              >{`Study according to your 
routine , make study 
more flexible`}</Text>
            </View>
            <View style={styles.title}>
              <Text
                style={[styles.createYourOwn1, styles.createTypo]}
              >{`Create your own 
study routien`}</Text>
            </View>
            <Image
              style={[styles.illustrationIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/illustration1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.base}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Image
            style={[styles.batteryIcon, styles.containerPosition]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.combinedShapeIcon}
            resizeMode="cover"
            source={require("../assets/combined-shape.png")}
          />
          <Image
            style={styles.wiFiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding4Position: {
    bottom: "0%",
    right: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    bottom: "26.45%",
    top: "61.88%",
    height: "11.66%",
    position: "absolute",
  },
  studyTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  createTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  onboarding4Backgroundmask: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  signUp: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.colorGhostwhite_100,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  signUpWrapper: {
    height: "48%",
    width: "38.13%",
    top: "28%",
    right: "31.12%",
    bottom: "24%",
    left: "30.75%",
    position: "absolute",
  },
  buttonprimary: {
    height: "99.01%",
    width: "47.72%",
    top: "0.4%",
    right: "52.28%",
    bottom: "0.59%",
    left: "0%",
    position: "absolute",
  },
  logInWrapper: {
    height: "47.52%",
    width: "29.28%",
    top: "28.12%",
    right: "35.7%",
    bottom: "24.36%",
    left: "35.02%",
    position: "absolute",
  },
  buttonsecondary: {
    width: "47.87%",
    left: "52.13%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  button: {
    height: "8.18%",
    top: "91.82%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  pavigationIcon: {
    height: "0.81%",
    width: "19.68%",
    top: "77.76%",
    right: "40.05%",
    bottom: "21.43%",
    left: "40.26%",
  },
  studyAccordingTo: {
    textAlign: "center",
    color: Color.colorGhostwhite_100,
  },
  text: {
    width: "56.67%",
    right: "23.95%",
    left: "19.39%",
  },
  createYourOwn: {
    color: Color.colorLavender_100,
  },
  title: {
    height: "10.69%",
    width: "57.26%",
    top: "48.27%",
    right: "23.65%",
    bottom: "41.03%",
    left: "19.09%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "42.12%",
    width: "77.54%",
    right: "11.42%",
    bottom: "57.88%",
    left: "11.03%",
    top: "0%",
  },
  maskGroup24: {
    height: "76.02%",
    width: "89.41%",
    top: "13.79%",
    right: "5.25%",
    bottom: "10.18%",
    left: "5.33%",
    position: "absolute",
  },
  onboarding4BackgroundmaskParent: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  studyAccordingTo1: {
    color: "#1f1fff",
    textAlign: "center",
  },
  text1: {
    width: "58.75%",
    right: "22.76%",
    left: "18.49%",
  },
  createYourOwn1: {
    color: "#2e2ebd",
  },
  time: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.promptRegular,
    color: Color.colorsDarkBase1,
    textAlign: "center",
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -5.8,
    right: 15,
    width: 67,
  },
  base: {
    height: "5.42%",
    bottom: "94.58%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  welcome3: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Welcome1;
