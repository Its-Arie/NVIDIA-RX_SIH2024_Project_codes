import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BaseUnitList1 from "../components/BaseUnitList1";
import BaseUnitList3 from "../components/BaseUnitList3";
import BaseUnitList from "../components/BaseUnitList";
import BaseDetailMenu from "../components/BaseDetailMenu";
import BaseMenuNavigation1 from "../components/BaseMenuNavigation1";
import Base from "../components/Base";
import {
  Color,
  Gap,
  Padding,
  FontSize,
  FontFamily,
  Border,
} from "../GlobalStyles";

const LessonPlan3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lessonPlan8}>
      <View style={styles.baseUnitList}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={styles.kha}>ખ : kha</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <BaseUnitList1
        vowels="સ્વરો (Vowels)"
        prop="૧૪ પાઠો"
        lessons="14 Lessons"
        ellipseIconTop={363}
      />
      <View style={[styles.separatorLight, styles.separatorPosition1]} />
      <View style={[styles.separatorLight1, styles.separatorPosition1]} />
      <View style={[styles.separatorLight2, styles.separatorPosition1]} />
      <View style={[styles.separatorLight3, styles.separatorPosition]} />
      <View style={[styles.separatorLight4, styles.separatorPosition]} />
      <View style={[styles.separatorLight5, styles.separatorPosition]} />
      <View style={[styles.separatorLight6, styles.separatorPosition]} />
      <BaseUnitList1
        vowels="વ્યંજક (Consonant)"
        prop="૩૪ પાઠો"
        lessons="34 Lessons"
        ellipseIconTop={602}
      />
      <BaseUnitList3
        ka="અ : a "
        propTop={428}
        propLeft={31}
        onBaseUnitListPress={() => navigation.navigate("LessonPlan2")}
      />
      <BaseUnitList
        prop="ક : ka"
        iconactiondoneOutline24px={require("../assets/iconactiondone-outline-24px5.png")}
        propTop={667}
        propLeft={32}
      />
      <View style={[styles.baseUnitList1, styles.basePosition]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={styles.kha}>આ : aa</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.baseUnitList2, styles.basePosition]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={styles.kha}>ખ : kha</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <View style={[styles.baseUnitList3, styles.basePosition]}>
        <View style={styles.baseUnitListInner}>
          <View>
            <Text style={styles.kha}>ઇ : i</Text>
          </View>
        </View>
        <Image
          style={styles.iconactiondoneOutline24px}
          resizeMode="cover"
          source={require("../assets/iconactiondone-outline-24px.png")}
        />
      </View>
      <BaseDetailMenu propTop={1} propHeight={51} />
      <View style={styles.cardCardImage}>
        <View style={styles.baseVideoPlayer}>
          <Image
            style={[styles.baseVideoPlayerChild, styles.baseLayout]}
            resizeMode="cover"
            source={require("../assets/frame-3054.png")}
          />
          <Image
            style={[styles.baseVideoPlayerItem, styles.baseLayout]}
            resizeMode="cover"
            source={require("../assets/frame-3055.png")}
          />
        </View>
      </View>
      <BaseMenuNavigation1
        vowels="વ્યંજક (Consonant)"
        prop="ક : ka"
        propWidth={145}
        propLeft={207}
        propLeft1={195}
      />
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
  basePosition: {
    left: 32,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    alignItems: "center",
    flexDirection: "row",
    height: 39,
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
  kha: {
    fontSize: FontSize.size_xs_6,
    fontFamily: FontFamily.typographyRegularTextXS10,
    color: Color.colorsDarkBase1,
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
    top: 245,
    left: -2,
    gap: Gap.gap_xl,
    paddingVertical: 9,
    paddingHorizontal: Padding.p_xl_8,
    height: 39,
    width: 312,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
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
  baseUnitList1: {
    top: 490,
  },
  baseUnitList2: {
    top: 729,
  },
  baseUnitList3: {
    top: 554,
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
  lessonPlan8: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LessonPlan3;
