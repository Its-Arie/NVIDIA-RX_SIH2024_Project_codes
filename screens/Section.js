import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import BaseUnitList2 from "../components/BaseUnitList2";
import BaseUnitList4 from "../components/BaseUnitList4";
import { useNavigation } from "@react-navigation/native";
import BaseMenuNavigation2 from "../components/BaseMenuNavigation2";
import Base from "../components/Base";
import {
  Color,
  Padding,
  FontFamily,
  Gap,
  Border,
  FontSize,
} from "../GlobalStyles";

const Section = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section1}>
      <View style={styles.section1Child} />
      <BaseUnitList2
        section1Numb="વિભાગ ૧ : સંખ્યાઓ (Section 1 : Numbers )"
        prop="૧૦ પાઠો"
        lessons="10 Lessons"
      />
      <View style={[styles.separatorLight, styles.separatorPosition2]} />
      <View style={[styles.separatorLight1, styles.separatorPosition2]} />
      <View style={[styles.separatorLight2, styles.separatorPosition2]} />
      <View style={[styles.separatorLight3, styles.separatorPosition1]} />
      <View style={[styles.separatorLight4, styles.separatorPosition1]} />
      <View style={[styles.separatorLight5, styles.separatorPosition]} />
      <View style={[styles.separatorLight6, styles.separatorPosition]} />
      <BaseUnitList4 />
      <View style={[styles.separatorLight7, styles.separatorLayout]} />
      <View style={[styles.separatorLight8, styles.separatorLayout]} />
      <Pressable
        style={[styles.baseUnitList, styles.baseSpaceBlock1]}
        onPress={() => navigation.navigate("LessonPlan4")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              સ્વરો (Vowels)
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.baseUnitList1, styles.baseSpaceBlock1]}
        onPress={() => navigation.navigate("LessonPlan4")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              વ્યંજક (Consonant)
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.separatorLight9, styles.separatorPosition1]} />
      <View style={[styles.baseUnitList2, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              ત્રણ : ૩ : 3 : Three
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px3.png")}
        />
      </View>
      <Pressable
        style={[styles.baseUnitList3, styles.baseSpaceBlock]}
        onPress={() => navigation.navigate("LessonPlan")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              શૂન્ય : ૦ : 0 : Zero
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px3.png")}
        />
      </Pressable>
      <View style={[styles.baseUnitList4, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              ચાર : ૪ : 4 : Four
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px3.png")}
        />
      </View>
      <Pressable
        style={[styles.baseUnitList5, styles.baseSpaceBlock]}
        onPress={() => navigation.navigate("LessonPlan1")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              એક : ૧ : 1 : One
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px3.png")}
        />
      </Pressable>
      <View style={[styles.baseUnitList6, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              પાંચ : ૫ : 5 : Five
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px3.png")}
        />
      </View>
      <View style={[styles.baseUnitList7, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.vowels, styles.vowelsClr]}>
              બે : ૨ : 2 : Two
            </Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px3.png")}
        />
      </View>
      <View style={[styles.baseDetailMenu, styles.menuLayout]}>
        <View style={[styles.rightMenu, styles.menuLayout]}>
          <Text style={[styles.lessons, styles.cardPosition]}>
            પાઠો (Lessons)
          </Text>
        </View>
      </View>
      <View style={[styles.cardCardImage, styles.cardPosition]} />
      <BaseMenuNavigation2 gujrati="ગુજરાતી ઈમેજ લર્નિંગ લેસન  (Gujrati Learning Path)" />
      <Base />
      <View style={[styles.separatorLight10, styles.separatorPosition2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorPosition2: {
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: "0.13%",
    right: "-0.4%",
    width: "100.27%",
    height: "0.12%",
    position: "absolute",
  },
  separatorPosition1: {
    left: "8.67%",
    right: "7.87%",
    width: "83.47%",
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: "0.12%",
    position: "absolute",
  },
  separatorPosition: {
    left: "8.4%",
    right: "8.13%",
    width: "83.47%",
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: "0.12%",
    position: "absolute",
  },
  separatorLayout: {
    height: 1,
    left: 0,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    width: 376,
    position: "absolute",
  },
  baseSpaceBlock1: {
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    width: 312,
    alignItems: "center",
    flexDirection: "row",
    left: 32,
    position: "absolute",
  },
  vowelsClr: {
    color: Color.colorsDarkBase1,
    fontFamily: FontFamily.typographyRegularTextXS10,
  },
  baseSpaceBlock: {
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    alignItems: "center",
    flexDirection: "row",
    width: 312,
    position: "absolute",
  },
  menuLayout: {
    width: 374,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  cardPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  section1Child: {
    top: -98,
    left: 375,
    height: 910,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 376,
    position: "absolute",
    backgroundColor: Color.colorDarkseagreen,
    borderRadius: Border.br_11xl,
  },
  separatorLight: {
    top: "50.31%",
    bottom: "49.57%",
  },
  separatorLight1: {
    top: "27.4%",
    bottom: "72.48%",
  },
  separatorLight2: {
    top: "57.7%",
    bottom: "42.18%",
  },
  separatorLight3: {
    top: "34.17%",
    bottom: "65.7%",
  },
  separatorLight4: {
    top: "64.47%",
    bottom: "35.41%",
  },
  separatorLight5: {
    top: "87.13%",
    bottom: "12.75%",
  },
  separatorLight6: {
    top: "95.01%",
    bottom: "4.86%",
  },
  separatorLight7: {
    top: 655,
  },
  separatorLight8: {
    top: 593,
  },
  vowels: {
    fontSize: FontSize.size_xs_6,
    textAlign: "left",
    width: 237,
    height: 15,
  },
  baseUnitListInner: {
    alignItems: "center",
    flexDirection: "row",
  },
  baseUnitList: {
    top: 662,
  },
  baseUnitList1: {
    top: 724,
  },
  separatorLight9: {
    top: "42.3%",
    bottom: "57.57%",
  },
  iconactiondoneOutline24px: {
    width: 24,
    height: 20,
  },
  baseUnitList2: {
    top: 418,
    left: 33,
    gap: Gap.gap_xl,
  },
  baseUnitList3: {
    top: 230,
    gap: Gap.gap_xl,
    left: 32,
  },
  baseUnitList4: {
    top: 476,
    left: 33,
    gap: Gap.gap_xl,
  },
  baseUnitList5: {
    top: 294,
    left: 33,
    gap: Gap.gap_xl,
  },
  baseUnitList6: {
    top: 540,
    left: 33,
    gap: Gap.gap_xl,
  },
  baseUnitList7: {
    top: 360,
    left: 33,
    gap: Gap.gap_xl,
  },
  lessons: {
    marginTop: -8,
    marginLeft: -81,
    fontSize: FontSize.typographyBoldTextDefault14_size,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 166,
    color: Color.colorsDarkBase1,
    fontFamily: FontFamily.typographyRegularTextXS10,
    alignItems: "center",
  },
  rightMenu: {
    top: 0,
    borderRadius: 12,
    height: 52,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  baseDetailMenu: {
    top: 99,
    left: 1,
    height: 53,
  },
  cardCardImage: {
    marginTop: -414,
    marginLeft: -187.5,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTeal_100,
    width: 375,
    height: 117,
  },
  separatorLight10: {
    top: "19.52%",
    bottom: "80.36%",
  },
  section1: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorDarkseagreen,
    borderRadius: Border.br_11xl,
  },
});

export default Section;
