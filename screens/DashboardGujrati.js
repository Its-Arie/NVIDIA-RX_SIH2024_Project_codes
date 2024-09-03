import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import BaseMenuNavigation5 from "../components/BaseMenuNavigation5";
import BaseNavigation3 from "../components/BaseNavigation3";
import { useNavigation } from "@react-navigation/native";
import Frame from "../components/Frame";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DashboardGujrati = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardGujrati}>
      <View style={[styles.base, styles.basePosition]}>
        <View style={styles.action}>
          <Text style={styles.time}>9:41</Text>
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
        <Image
          style={[styles.baseChild, styles.basePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <BaseMenuNavigation5 />
      </View>
      <BaseNavigation3 />
      <Image
        style={styles.component4Icon}
        resizeMode="cover"
        source={require("../assets/component-4.png")}
      />
      <Image
        style={[styles.dashboardGujratiChild, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-54.png")}
      />
      <Image
        style={[styles.dashboardGujratiItem, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-55.png")}
      />
      <Text style={[styles.statusactive, styles.daysInWeekTypo]}>
        Status:Active
      </Text>
      <Text style={[styles.daysInWeek, styles.daysInWeekTypo]}>
        Day’s in week: 7
      </Text>
      <Pressable
        style={[styles.startLearningWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.startLearning}>
          <Text style={styles.text}>શીખવાનું શરૂ કરો </Text>
          <Text style={styles.startLearning1}>(Start Learning)</Text>
        </Text>
      </Pressable>
      <View style={[styles.completed92Wrapper, styles.wrapperFlexBox]}>
        <Text style={styles.dailyReportTypo}>
          <Text style={styles.completedTypo}>Completed</Text>
          <Text style={styles.text1}> :</Text>
          <Text style={styles.completedTypo}> 92%</Text>
        </Text>
      </View>
      <Text
        style={[styles.dailyReport, styles.completedTypo]}
      >{`દૈનિક અહેવાલ (Daily Report): `}</Text>
      <Frame
        frameViewPosition="absolute"
        frameViewTop={403}
        frameViewLeft={22}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  dashboardLayout: {
    height: 10,
    width: 11,
    left: 234,
    position: "absolute",
  },
  daysInWeekTypo: {
    height: 16,
    left: 250,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.typographyRegularTextXS10,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  completedTypo: {
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    color: Color.colorsDarkBase1,
    textAlign: "center",
    fontFamily: FontFamily.promptRegular,
    width: 54,
    left: 0,
    top: 0,
    position: "absolute",
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
    width: 54,
    position: "absolute",
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
  baseChild: {
    top: 36,
    height: 775,
  },
  base: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
  },
  component4Icon: {
    top: 91,
    left: 9,
    width: 220,
    height: 205,
    position: "absolute",
  },
  dashboardGujratiChild: {
    top: 113,
  },
  dashboardGujratiItem: {
    top: 144,
  },
  statusactive: {
    top: 105,
    width: 106,
  },
  daysInWeek: {
    top: 138,
    width: 119,
  },
  text: {
    fontSize: FontSize.size_5xl,
  },
  startLearning1: {
    fontSize: FontSize.size_smi,
  },
  startLearning: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.promptRegular,
  },
  startLearningWrapper: {
    marginLeft: -79.5,
    top: 662,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 14,
    backgroundColor: Color.colorMediumaquamarine,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 158,
    height: 62,
  },
  text1: {
    fontFamily: FontFamily.typographyRegularTextXS10,
  },
  dailyReportTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  completed92Wrapper: {
    marginLeft: -144,
    top: 314,
    height: 31,
  },
  dailyReport: {
    top: 386,
    left: 41,
    textDecoration: "underline",
    width: 228,
    height: 29,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    position: "absolute",
  },
  dashboardGujrati: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default DashboardGujrati;
