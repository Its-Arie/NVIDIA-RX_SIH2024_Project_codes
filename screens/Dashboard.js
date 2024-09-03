import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import BaseNavigation4 from "../components/BaseNavigation4";
import CardPreBuild4 from "../components/CardPreBuild4";
import {
  Gap,
  FontFamily,
  Padding,
  Border,
  Color,
  FontSize,
} from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View style={[styles.base, styles.basePosition]}>
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
        <Image
          style={styles.baseChild}
          resizeMode="cover"
          source={require("../assets/rectangle-178.png")}
        />
      </View>
      <View style={[styles.dashboardChild, styles.basePosition]} />
      <View style={[styles.baseProfile, styles.cardFlexBox]}>
        <View style={styles.baseProfileInner}>
          <View style={styles.welcomeBackParent}>
            <Text style={[styles.welcomeBack, styles.valueTypo]}>
              <Text style={styles.text}>{`પાછું સ્વાગત છે `}</Text>
              <Text style={styles.welcomeBack1}>(Welcome back)</Text>
            </Text>
            <Text style={[styles.userFullName, styles.valueTypo]}>
              Rohan Panchal
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconsBell}
          resizeMode="cover"
          source={require("../assets/icons--bell.png")}
        />
      </View>
      <Image
        style={[styles.circlewavycheckIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/circlewavycheck1.png")}
      />
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
      </Pressable>
      <BaseNavigation4 />
      <View style={[styles.lineParent, styles.lineParentPosition]}>
        <View style={styles.frameChild} />
        <Text style={styles.silentLearning}>શાંત શીખવું (Silent Learning)</Text>
        <View style={styles.frameChild} />
      </View>
      <Pressable
        style={[styles.cardPreBuild, styles.cardShadowBox]}
        onPress={() => navigation.navigate("Section")}
      >
        <View style={styles.cardFlexBox}>
          <Image
            style={styles.cardCardImage}
            resizeMode="cover"
            source={require("../assets/card--card-image8.png")}
          />
          <View style={styles.cardCardTitleLight}>
            <Text style={[styles.courseTitle, styles.courseTypo]}>
              ગુજરાતી લર્નિંગ પાથ  (Gujrati Learning Path)
            </Text>
            <View style={[styles.bottomSection, styles.ratingFlexBox]}>
              <View style={styles.ratingFlexBox}>
                <Image
                  style={styles.starIcon}
                  resizeMode="cover"
                  source={require("../assets/star.png")}
                />
                <Text style={[styles.value, styles.valueTypo]}>4.7</Text>
              </View>
              <Image
                style={styles.separatorIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-221.png")}
              />
              <Text style={[styles.level, styles.levelTypo]}>All Level</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardCardProgressParent}>
          <View style={styles.cardCardProgress}>
            <View style={styles.icon1}>
              <Image
                style={styles.iconsBell}
                resizeMode="cover"
                source={require("../assets/icons--award.png")}
              />
            </View>
            <View style={styles.content}>
              <Text style={[styles.currentProgress, styles.text1Typo]}>
                Current Progress
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>50%</Text>
            </View>
          </View>
          <View style={styles.cardCardProgress}>
            <View style={styles.icon1}>
              <Image
                style={styles.iconsBell}
                resizeMode="cover"
                source={require("../assets/icons--award.png")}
              />
            </View>
            <View style={styles.content}>
              <Text style={[styles.currentProgress, styles.text1Typo]}>
                Current Progress
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>50%</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardProgressBar}>
          <View style={[styles.cardProgressBarChild, styles.cardPosition]} />
          <View style={[styles.cardProgressBarItem, styles.cardPosition]} />
        </View>
        <View style={styles.cardCardProgressParent}>
          <View style={styles.baseProfileInner}>
            <Text style={[styles.currentProgress2, styles.currentClr]}>
              Current Progress
            </Text>
            <Text style={[styles.text3, styles.levelTypo]}>50%</Text>
          </View>
          <View style={styles.baseProfileInner}>
            <Text style={[styles.currentProgress2, styles.currentClr]}>
              Current Progress
            </Text>
            <Text style={[styles.text3, styles.levelTypo]}>50%</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.cardPreBuild1, styles.cardShadowBox]}
        onPress={() => navigation.navigate("Mathematics")}
      >
        <View style={styles.cardFlexBox}>
          <Image
            style={styles.cardCardImage}
            resizeMode="cover"
            source={require("../assets/card--card-image9.png")}
          />
          <View style={styles.cardCardTitleLight}>
            <Text style={[styles.courseTitle1, styles.courseTypo]}>
              ગણિત  (Mathematics)
            </Text>
            <View style={[styles.bottomSection, styles.ratingFlexBox]}>
              <View style={styles.ratingFlexBox}>
                <Image
                  style={styles.starIcon}
                  resizeMode="cover"
                  source={require("../assets/star.png")}
                />
                <Text style={[styles.value, styles.valueTypo]}>5.0</Text>
              </View>
              <Image
                style={styles.separatorIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-221.png")}
              />
              <Text style={[styles.level1, styles.levelTypo]}>Beginner</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardCardProgressParent}>
          <View style={styles.cardCardProgress}>
            <View style={styles.icon1}>
              <Image
                style={styles.iconsBell}
                resizeMode="cover"
                source={require("../assets/icons--award.png")}
              />
            </View>
            <View style={styles.content}>
              <Text style={[styles.currentProgress, styles.text1Typo]}>
                Current Progress
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>50%</Text>
            </View>
          </View>
          <View style={styles.cardCardProgress}>
            <View style={styles.icon1}>
              <Image
                style={styles.iconsBell}
                resizeMode="cover"
                source={require("../assets/icons--award.png")}
              />
            </View>
            <View style={styles.content}>
              <Text style={[styles.currentProgress, styles.text1Typo]}>
                Current Progress
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>50%</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardProgressBar}>
          <View style={[styles.cardProgressBarChild, styles.cardPosition]} />
          <View style={[styles.cardProgressBarItem, styles.cardPosition]} />
        </View>
        <View style={styles.cardCardProgressParent}>
          <View style={styles.baseProfileInner}>
            <Text style={[styles.currentProgress2, styles.currentClr]}>
              Current Progress
            </Text>
            <Text style={[styles.text3, styles.levelTypo]}>50%</Text>
          </View>
          <View style={styles.baseProfileInner}>
            <Text style={[styles.currentProgress2, styles.currentClr]}>
              Current Progress
            </Text>
            <Text style={[styles.text3, styles.levelTypo]}>50%</Text>
          </View>
        </View>
      </Pressable>
      <CardPreBuild4 />
      <View style={styles.dashboardItem} />
      <Text style={styles.yourProgressInContainer}>
        <Text style={styles.courseTypo}>{`અભ્યાસક્રમોમાં તમારી પ્રગતિ
`}</Text>
        <Text style={styles.yourProgress}>(Your progress in Courses)</Text>
      </Text>
      <View style={styles.cardProgressBar2}>
        <Pressable
          style={styles.gujratiLearningPathParent}
          onPress={() => navigation.navigate("DashboardGujrati")}
        >
          <Text style={[styles.gujratiLearningPath, styles.lineParentPosition]}>
            ગુજરાતી લર્નિંગ પાથ  (Gujrati Learning Path)
          </Text>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <LinearGradient
            style={[styles.groupItem, styles.groupBg]}
            locations={[0, 1]}
            colors={["#97f3dd", "#3a729b"]}
            useAngle={true}
            angle={63.49}
          />
        </Pressable>
      </View>
      <View style={[styles.scienceParent, styles.scienceLayout]}>
        <Text style={[styles.science, styles.scienceLayout]}>
          વિજ્ઞાન (Science)
        </Text>
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupBg]}
          locations={[0, 1]}
          colors={["#ffbefc", "#931769"]}
          useAngle={true}
          angle={269.88}
        />
      </View>
      <View style={[styles.mathematicsParent, styles.mathematicsLayout]}>
        <Text style={[styles.mathematics, styles.mathematicsLayout]}>
          ગણિત  (Mathematics)
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <LinearGradient
          style={[styles.groupChild2, styles.groupBg]}
          locations={[0, 1]}
          colors={["#c1ff3c", "#1af123"]}
          useAngle={true}
          angle={180}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    width: 375,
    left: 0,
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
  cardFlexBox: {
    gap: Gap.gap_2xl,
    alignItems: "center",
    flexDirection: "row",
  },
  valueTypo: {
    fontFamily: FontFamily.typographyBoldTextDefault14,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineParentPosition: {
    left: "50%",
    position: "absolute",
  },
  cardShadowBox: {
    padding: Padding.p_mini,
    borderRadius: Border.br_xl,
    elevation: 8,
    shadowRadius: 8,
    left: 21,
    gap: Gap.gap_lg,
    backgroundColor: Color.colorMediumaquamarine,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  courseTypo: {
    fontFamily: FontFamily.promptBold,
    fontWeight: "700",
  },
  ratingFlexBox: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    flexDirection: "row",
  },
  levelTypo: {
    fontFamily: FontFamily.typographyRegularTextXS10,
    textAlign: "left",
  },
  text1Typo: {
    width: 95,
    fontFamily: FontFamily.typographyRegularTextXS10,
    textAlign: "left",
  },
  cardPosition: {
    borderRadius: Border.br_6xl,
    height: 15,
    left: 0,
    top: 0,
    position: "absolute",
  },
  currentClr: {
    color: Color.colorsLightBase3,
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  groupChildLayout: {
    borderRadius: Border.br_xl_7,
    width: 244,
    backgroundColor: Color.colorsLightBase2,
    height: 12,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.textColorDownBar1,
    borderRadius: 41,
    position: "absolute",
  },
  scienceLayout: {
    width: 296,
    position: "absolute",
  },
  mathematicsLayout: {
    width: 275,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: "center",
    color: Color.colorsDarkBase1,
    fontFamily: FontFamily.promptRegular,
    left: 0,
    top: 0,
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
  baseChild: {
    top: 46,
    left: 15,
    width: 68,
    height: 68,
    position: "absolute",
  },
  base: {
    height: 44,
    top: 0,
  },
  dashboardChild: {
    top: -6,
    borderRadius: 3,
    height: 834,
  },
  text: {
    color: Color.colorWhite,
  },
  welcomeBack1: {
    color: "#909090",
  },
  welcomeBack: {
    fontSize: FontSize.typographyRegularTextXS10_size,
    textAlign: "center",
  },
  userFullName: {
    width: 225,
    textAlign: "left",
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorWhite,
  },
  welcomeBackParent: {
    gap: 2,
  },
  baseProfileInner: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconsBell: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  baseProfile: {
    top: 64,
    left: 84,
    position: "absolute",
  },
  circlewavycheckIcon: {
    height: "2.46%",
    width: "5.33%",
    top: "9.61%",
    right: "45.87%",
    bottom: "87.93%",
    left: "48.8%",
    position: "absolute",
  },
  logoIcon: {
    top: 73,
    width: 19,
    height: 19,
    left: 38,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "7.47%",
    top: "7.39%",
    right: "81.87%",
    bottom: "87.64%",
    width: "10.67%",
    height: "4.98%",
    position: "absolute",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 21,
    height: 1,
  },
  silentLearning: {
    textAlign: "left",
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorsDarkBase1,
    fontFamily: FontFamily.promptRegular,
  },
  lineParent: {
    marginLeft: -114.5,
    top: 118,
    justifyContent: "center",
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  cardCardImage: {
    borderRadius: Border.br_mini,
    width: 75,
    height: 75,
  },
  courseTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.promptBold,
    textAlign: "left",
    color: Color.colorWhite,
  },
  starIcon: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  value: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  separatorIcon: {
    width: 3,
    height: 3,
  },
  level: {
    color: Color.colorWhite,
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  bottomSection: {
    height: 15,
  },
  cardCardTitleLight: {
    gap: Gap.gap_xs,
  },
  icon1: {
    borderRadius: Border.br_3xs,
    padding: Padding.p_5xs_5,
    backgroundColor: Color.colorsLightBase2,
    alignItems: "center",
    flexDirection: "row",
  },
  currentProgress: {
    color: Color.colorsLightBase3,
    fontSize: FontSize.typographyRegularTextXS10_size,
  },
  text1: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorsDarkBase1,
  },
  content: {
    gap: Gap.gap_3xs,
    alignItems: "center",
  },
  cardCardProgress: {
    gap: Gap.gap_md,
    flexDirection: "row",
  },
  cardCardProgressParent: {
    display: "none",
    gap: Gap.gap_lg,
    alignItems: "center",
    flexDirection: "row",
  },
  cardProgressBarChild: {
    width: 295,
    backgroundColor: Color.colorsLightBase2,
  },
  cardProgressBarItem: {
    backgroundColor: Color.colorsSuccess,
    width: 49,
  },
  cardProgressBar: {
    width: 284,
    display: "none",
    height: 15,
  },
  currentProgress2: {
    width: 100,
    fontFamily: FontFamily.typographyRegularTextXS10,
    textAlign: "left",
  },
  text3: {
    width: 40,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorsDarkBase1,
  },
  cardPreBuild: {
    top: 144,
    width: 326,
    gap: Gap.gap_lg,
  },
  courseTitle1: {
    width: 200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.promptBold,
    textAlign: "left",
    color: Color.colorWhite,
  },
  level1: {
    fontSize: 10,
    color: Color.colorWhite,
  },
  cardPreBuild1: {
    top: 259,
    gap: Gap.gap_lg,
  },
  dashboardItem: {
    top: 491,
    left: 19,
    shadowRadius: 10,
    elevation: 10,
    width: 336,
    height: 243,
    backgroundColor: Color.colorMediumaquamarine,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  yourProgress: {
    fontFamily: FontFamily.procionoRegular,
  },
  yourProgressInContainer: {
    top: 495,
    left: 75,
    width: 224,
    height: 26,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  gujratiLearningPath: {
    marginLeft: -81.8,
    width: 163,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.promptRegular,
    height: 18,
    top: 0,
  },
  groupChild: {
    top: 41,
    borderRadius: Border.br_xl_7,
    left: 0,
  },
  groupItem: {
    left: 3,
    width: 192,
    height: 10,
    backgroundColor: Color.textColorDownBar1,
    borderRadius: 41,
    top: 42,
  },
  gujratiLearningPathParent: {
    marginLeft: -86.35,
    top: -42,
    height: 53,
    width: 244,
    left: "50%",
    position: "absolute",
  },
  cardProgressBar2: {
    top: 586,
    left: 66,
    width: 173,
    height: 9,
    position: "absolute",
  },
  science: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.promptRegular,
    height: 18,
    left: 0,
    top: 0,
  },
  groupInner: {
    left: 27,
    top: 42,
  },
  rectangleLineargradient: {
    top: 43,
    left: 30,
    width: 93,
    height: 10,
    backgroundColor: Color.textColorDownBar1,
    borderRadius: 41,
  },
  scienceParent: {
    top: 656,
    height: 54,
    left: 38,
  },
  mathematics: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.promptRegular,
    height: 18,
    left: 0,
    top: 0,
  },
  groupChild1: {
    left: 13,
    top: 41,
    borderRadius: Border.br_xl_7,
  },
  groupChild2: {
    left: 16,
    width: 145,
    backgroundColor: Color.textColorDownBar1,
    borderRadius: 41,
    top: 42,
    height: 9,
  },
  mathematicsParent: {
    top: 601,
    left: 52,
    height: 53,
  },
  dashboard: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default Dashboard;
