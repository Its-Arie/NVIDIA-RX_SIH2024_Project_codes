import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import BaseUnitList2 from "../components/BaseUnitList2";
import BaseUnitList4 from "../components/BaseUnitList4";
import { useNavigation } from "@react-navigation/native";
import BaseDetailMenu from "../components/BaseDetailMenu";
import BaseMenuNavigation3 from "../components/BaseMenuNavigation3";
import Base from "../components/Base";
import {
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const LessonPlan1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lessonPlan2}>
      <View style={styles.lessonPlan2Child} />
      <BaseUnitList2
        section1Numb="વિભાગ ૧ : સંખ્યાઓ (Section 1 : Numbers )"
        prop="૧૦ પાઠો"
        lessons="10 Lessons"
        frameViewHeight="unset"
        frameViewTop={363}
        frameViewLeft={0}
      />
      <View style={[styles.separatorLight, styles.separatorPosition1]} />
      <View style={[styles.separatorLight1, styles.separatorPosition1]} />
      <View style={[styles.separatorLight2, styles.separatorPosition1]} />
      <View style={[styles.separatorLight3, styles.separatorPosition]} />
      <View style={[styles.separatorLight4, styles.separatorPosition]} />
      <View style={[styles.separatorLight5, styles.separatorPosition]} />
      <View style={[styles.separatorLight6, styles.separatorPosition]} />
      <BaseUnitList4 propTop={602} />
      <Pressable
        style={styles.baseUnitList}
        onPress={() => navigation.navigate("LessonPlan")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.text, styles.oneLayout]}>
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
      <Pressable
        style={[styles.baseUnitList1, styles.basePosition]}
        onPress={() => navigation.navigate("LessonPlan4")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.text, styles.oneLayout]}>સ્વરો (Vowels)</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.baseUnitList2, styles.basePosition]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.one, styles.oneLayout]}>એક : ૧ : 1 : One</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px4.png")}
        />
      </View>
      <Pressable
        style={[styles.baseUnitList3, styles.basePosition]}
        onPress={() => navigation.navigate("LessonPlan4")}
      >
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.text, styles.oneLayout]}>
              વ્યંજક (Consonant)
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.baseUnitList4, styles.basePosition]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={[styles.text, styles.oneLayout]}>
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
      <BaseDetailMenu propTop={1} propHeight={51} />
      <View style={styles.cardCardImage}>
        <View style={styles.baseVideoPlayer}>
          <Image
            style={[styles.baseVideoPlayerChild, styles.baseLayout]}
            resizeMode="cover"
            source={require("../assets/frame-3052.png")}
          />
          <Image
            style={[styles.baseVideoPlayerItem, styles.baseLayout]}
            resizeMode="cover"
            source={require("../assets/frame-3053.png")}
          />
        </View>
      </View>
      <BaseMenuNavigation3 one="એક : ૧ : 1 : One" />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorPosition1: {
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: "-0.13%",
    right: "-0.13%",
    width: "100.27%",
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
  oneLayout: {
    height: 15,
    width: 237,
    textAlign: "left",
    color: Color.colorsDarkBase1,
  },
  basePosition: {
    left: 32,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    alignItems: "center",
    flexDirection: "row",
    width: 312,
    position: "absolute",
  },
  baseLayout: {
    width: 187,
    top: 0,
    height: 204,
    position: "absolute",
    overflow: "hidden",
  },
  lessonPlan2Child: {
    top: 245,
    left: 374,
    backgroundColor: Color.colorDarkseagreen,
    width: 376,
    height: 748,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  separatorLight: {
    top: "74.08%",
    bottom: "25.8%",
  },
  separatorLight1: {
    top: "51.79%",
    bottom: "48.09%",
  },
  separatorLight2: {
    top: "81.22%",
    bottom: "18.66%",
  },
  separatorLight3: {
    top: "58.31%",
    bottom: "41.56%",
  },
  separatorLight4: {
    top: "87.75%",
    bottom: "12.13%",
  },
  separatorLight5: {
    top: "95.63%",
    bottom: "4.25%",
  },
  separatorLight6: {
    top: "66.19%",
    bottom: "33.68%",
  },
  text: {
    fontSize: FontSize.size_xs_6,
    fontFamily: FontFamily.typographyRegularTextXS10,
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
    top: 428,
    left: 31,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    width: 312,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  baseUnitList1: {
    top: 667,
  },
  one: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.typographyBoldTextDefault14,
  },
  baseUnitList2: {
    top: 490,
    gap: Gap.gap_xl,
  },
  baseUnitList3: {
    top: 729,
  },
  baseUnitList4: {
    top: 554,
    gap: Gap.gap_xl,
  },
  baseVideoPlayerChild: {
    left: 0,
    top: 0,
  },
  baseVideoPlayerItem: {
    left: 187,
  },
  baseVideoPlayer: {
    top: 115,
    backgroundColor: Color.colorsDarkBase1,
    height: 204,
    left: 0,
    width: 375,
    position: "absolute",
  },
  cardCardImage: {
    marginTop: -414,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTeal_100,
    height: 319,
    width: 375,
    position: "absolute",
  },
  lessonPlan2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default LessonPlan1;
