import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Base from "../components/Base";
import BaseNavigation1 from "../components/BaseNavigation1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Base />
      <LinearGradient
        style={styles.profileChild}
        locations={[0, 1]}
        colors={["#fff", "rgba(255, 255, 255, 0)"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.accountSettings, styles.supportTypo]}>
        ખાતા સુયોજનો (Account Settings)
      </Text>
      <Text style={[styles.support, styles.supportTypo]}>Support</Text>
      <View style={[styles.accountSecurityParent, styles.profileParentLayout]}>
        <Text style={[styles.accountSecurity, styles.changePasswordTypo]}>
          ખાતા સુરક્ષા (Account Security)
        </Text>
        <Image
          style={[styles.caretcirclerightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/caretcircleright.png")}
        />
      </View>
      <View style={[styles.tutorialParent, styles.profileParentLayout]}>
        <Text style={[styles.accountSecurity, styles.changePasswordTypo]}>
          માર્ગદર્શિકા (Tutorial)
        </Text>
        <Image
          style={[styles.caretcirclerightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/caretcircleright.png")}
        />
      </View>
      <View style={[styles.profileInner, styles.profileParentLayout]}>
        <View
          style={[styles.changePasswordParent, styles.submitAFeaturePosition]}
        >
          <Text style={styles.changePasswordTypo}>
            પાસવર્ડ બદલો (Change Password)
          </Text>
          <Image
            style={styles.caretcirclerightIcon2}
            resizeMode="cover"
            source={require("../assets/caretcircleright.png")}
          />
        </View>
      </View>
      <View style={[styles.submitABugParent, styles.profileParentLayout]}>
        <Text style={[styles.accountSecurity, styles.changePasswordTypo]}>
          ક્ષતિ રજૂ કરો (Submit a Bug)
        </Text>
        <Image
          style={[styles.caretcirclerightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/caretcircleright.png")}
        />
      </View>
      <View style={[styles.editProfileParent, styles.profileParentLayout]}>
        <Text style={[styles.accountSecurity, styles.changePasswordTypo]}>
          પ્રોફાઇલમાં ફેરફાર કરો (Edit Profile)
        </Text>
        <Image
          style={[styles.caretcirclerightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/caretcircleright.png")}
        />
      </View>
      <View
        style={[styles.submitAFeatureRequestParent, styles.profileParentLayout]}
      >
        <Text style={[styles.submitAFeature, styles.changePasswordTypo]}>
          ફીચર વિનંતી સબમિટ કરો (Submit a Feature Request)
        </Text>
        <Image
          style={[styles.caretcirclerightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/caretcircleright.png")}
        />
      </View>
      <BaseNavigation1 />
      <Image
        style={[styles.profileItem, styles.profileItemPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.editIcon}
        resizeMode="cover"
        source={require("../assets/edit.png")}
      />
      <Text style={[styles.email, styles.emailPosition]}>
        rohanpanchal@gmail.com
      </Text>
      <View style={[styles.userFullNameParent, styles.profileItemPosition]}>
        <Text style={[styles.userFullName, styles.emailPosition]}>
          Rohan Panchal
        </Text>
        <Image
          style={[styles.circlewavycheckIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/circlewavycheck.png")}
        />
      </View>
      <Pressable
        style={styles.iconLogout}
        onPress={() => navigation.navigate("AuthMain")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-logout.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  supportTypo: {
    textAlign: "left",
    color: Color.colorsLightBase3,
    fontFamily: FontFamily.typographyRegularTextXS10,
    fontSize: FontSize.typographyRegularTextXS10_size,
    left: 25,
    position: "absolute",
  },
  profileParentLayout: {
    width: 333,
    height: 32,
    left: 25,
    position: "absolute",
  },
  changePasswordTypo: {
    color: Color.colorsDarkBase1,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    textAlign: "left",
    fontFamily: FontFamily.typographyRegularTextXS10,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  submitAFeaturePosition: {
    left: 0,
    position: "absolute",
  },
  profileItemPosition: {
    left: "50%",
    position: "absolute",
  },
  emailPosition: {
    fontFamily: FontFamily.promptRegular,
    left: "50%",
    position: "absolute",
  },
  profileChild: {
    top: 366,
    left: 376,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 376,
    height: 467,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: Color.textColorDownBar1,
    position: "absolute",
  },
  accountSettings: {
    top: 391,
  },
  support: {
    top: 565,
  },
  accountSecurity: {
    top: 7,
    left: 0,
    position: "absolute",
  },
  caretcirclerightIcon: {
    width: "9.61%",
    top: "0%",
    bottom: "0%",
    left: "90.39%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    height: "100%",
  },
  accountSecurityParent: {
    top: 419,
    height: 32,
  },
  tutorialParent: {
    top: 593,
    height: 32,
  },
  caretcirclerightIcon2: {
    width: 32,
    height: 32,
  },
  changePasswordParent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 103,
    top: 0,
  },
  profileInner: {
    top: 463,
    height: 32,
  },
  submitABugParent: {
    top: 637,
    height: 32,
  },
  editProfileParent: {
    top: 507,
    height: 32,
  },
  submitAFeature: {
    width: 225,
    height: 20,
    top: 0,
    left: 0,
    position: "absolute",
  },
  submitAFeatureRequestParent: {
    top: 681,
    height: 32,
  },
  profileItem: {
    marginTop: -342,
    marginLeft: -112.5,
    top: "50%",
    width: 224,
    height: 226,
  },
  editIcon: {
    top: 80,
    left: 258,
    width: 46,
    height: 46,
    position: "absolute",
  },
  email: {
    marginLeft: -85.5,
    top: 332,
    color: Color.colorGray_100,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontFamily: FontFamily.promptRegular,
    textAlign: "left",
  },
  userFullName: {
    marginLeft: -96.5,
    fontSize: FontSize.size_5xl,
    color: Color.textColorDownBar,
    textAlign: "center",
    top: 0,
  },
  circlewavycheckIcon: {
    height: "69.44%",
    width: "12.95%",
    top: "16.67%",
    bottom: "13.89%",
    left: "87.05%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  userFullNameParent: {
    marginLeft: -90.5,
    top: 296,
    width: 193,
    height: 36,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  iconLogout: {
    left: "88.53%",
    top: "6.4%",
    right: "4%",
    bottom: "90.15%",
    width: "7.47%",
    height: "3.45%",
    position: "absolute",
  },
  profile: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
