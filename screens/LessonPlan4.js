import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BaseUnitList2 from "../components/BaseUnitList2";
import BaseUnitList3 from "../components/BaseUnitList3";
import BaseMenuNavigation2 from "../components/BaseMenuNavigation2";
import Base from "../components/Base";
import {
  Color,
  Gap,
  Padding,
  FontFamily,
  Border,
  FontSize,
} from "../GlobalStyles";

const LessonPlan4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lessonPlan4}>
      <View style={styles.lessonPlan4Child} />
      <BaseUnitList2
        section1Numb="સ્વરો (Vowels)"
        prop="૧૪ પાઠો"
        lessons="14 Lessons"
        frameViewHeight={60}
        frameViewTop={163}
        frameViewLeft={1}
      />
      <View style={styles.separatorLight} />
      <View style={[styles.separatorLight1, styles.separatorPosition1]} />
      <View style={[styles.separatorLight2, styles.separatorPosition1]} />
      <View style={[styles.separatorLight3, styles.separatorPosition1]} />
      <View style={[styles.separatorLight4, styles.separatorPosition]} />
      <View style={[styles.separatorLight5, styles.separatorPosition]} />
      <View style={[styles.separatorLight6, styles.separatorPosition]} />
      <View style={[styles.separatorLight7, styles.separatorPosition]} />
      <BaseUnitList2
        section1Numb="વ્યંજક (Consonant)"
        prop="૩૪ પાઠો"
        lessons="34 Lessons"
        frameViewHeight={60}
        frameViewTop={409}
        frameViewLeft={1}
      />
      <BaseUnitList3
        ka="અ : a "
        propTop={230}
        propLeft={32}
        onBaseUnitListPress={() => navigation.navigate("LessonPlan2")}
      />
      <BaseUnitList3
        ka="ક : ka"
        propTop={476}
        propLeft={33}
        onBaseUnitListPress={() => navigation.navigate("LessonPlan3")}
      />
      <View style={[styles.baseUnitList, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.aa, styles.aaClr]}>આ : aa</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.baseUnitList1, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.aa, styles.aaClr]}>ખ : kha</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.baseUnitList2, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.aa, styles.aaClr]}>ઇ : i</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.baseDetailMenu, styles.menuLayout]}>
        <View style={[styles.rightMenu, styles.menuLayout]}>
          <Text style={[styles.alphabets, styles.cardPosition]}>
            મૂળાક્ષરો (Alphabets)
          </Text>
        </View>
      </View>
      <View style={[styles.cardCardImage, styles.cardPosition]} />
      <BaseMenuNavigation2 gujrati="વિભાગ 2 : (Section 2)" propTop={5} />
      <Base />
      <View style={styles.separatorLight8} />
      <View style={[styles.baseUnitList3, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.aa, styles.aaClr]}>ગ : ga</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.separatorLight9, styles.separatorPosition]} />
      <View style={[styles.baseUnitList4, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.aa, styles.aaClr]}>ઘ : gha</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.separatorLight10, styles.separatorPosition]} />
      <View style={[styles.baseUnitList5, styles.baseSpaceBlock]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.aa, styles.aaClr]}>ચ : ca</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separatorPosition1: {
    left: "0.13%",
    right: "-0.4%",
    width: "100.27%",
    height: "0.12%",
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  separatorPosition: {
    left: "8.67%",
    right: "7.87%",
    width: "83.47%",
    height: "0.12%",
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  baseSpaceBlock: {
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  aaClr: {
    color: Color.colorsDarkBase1,
    fontFamily: FontFamily.typographyRegularTextXS10,
  },
  menuLayout: {
    width: 374,
    position: "absolute",
  },
  cardPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lessonPlan4Child: {
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
    top: 159,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 0,
    width: 376,
    position: "absolute",
  },
  separatorLight1: {
    top: "50.31%",
    bottom: "49.57%",
  },
  separatorLight2: {
    top: "27.4%",
    bottom: "72.48%",
  },
  separatorLight3: {
    top: "57.7%",
    bottom: "42.18%",
  },
  separatorLight4: {
    top: "34.17%",
    bottom: "65.7%",
  },
  separatorLight5: {
    top: "64.47%",
    bottom: "35.41%",
  },
  separatorLight6: {
    top: "72.6%",
    bottom: "27.28%",
  },
  separatorLight7: {
    top: "42.3%",
    bottom: "57.57%",
  },
  aa: {
    fontSize: FontSize.size_xs_6,
    textAlign: "left",
    width: 237,
    height: 15,
  },
  baseUnitListInner: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconactiondoneOutline24px: {
    width: 24,
    height: 20,
  },
  baseUnitList: {
    top: 294,
    left: 33,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
  },
  baseUnitList1: {
    top: 540,
    left: 33,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
  },
  baseUnitList2: {
    top: 360,
    left: 33,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
  },
  alphabets: {
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
    borderRadius: 11,
    backgroundColor: "#faf9ff",
    height: 52,
    left: 0,
    width: 374,
  },
  baseDetailMenu: {
    top: 99,
    left: 1,
    backgroundColor: Color.colorsLightBase2,
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
  separatorLight8: {
    top: "80.6%",
    right: "8.13%",
    bottom: "19.27%",
    left: "8.4%",
    width: "83.47%",
    height: "0.12%",
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  baseUnitList3: {
    top: 605,
    left: 32,
  },
  separatorLight9: {
    top: "88.36%",
    bottom: "11.51%",
  },
  baseUnitList4: {
    top: 668,
    left: 33,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
  },
  separatorLight10: {
    top: "96.37%",
    bottom: "3.51%",
  },
  baseUnitList5: {
    top: 733,
    left: 33,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
  },
  lessonPlan4: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorDarkseagreen,
    borderRadius: Border.br_11xl,
  },
});

export default LessonPlan4;
