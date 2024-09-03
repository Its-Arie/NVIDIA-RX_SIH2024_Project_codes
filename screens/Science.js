import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import BaseNavigation from "../components/BaseNavigation";
import BaseMenuNavigation4 from "../components/BaseMenuNavigation4";
import CardCardImage1 from "../components/CardCardImage1";
import CardPreBuild1 from "../components/CardPreBuild1";
import CardPreBuild2 from "../components/CardPreBuild2";
import Base from "../components/Base";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Science = () => {
  return (
    <View style={styles.science}>
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <BaseMenuNavigation4 mathematics="વિજ્ઞાન (Science)" />
      <View style={[styles.cardPreBuildParent, styles.groupCardPosition]}>
        <View style={[styles.cardPreBuild, styles.groupCardPosition]}>
          <View style={[styles.cardCardContent, styles.cardFlexBox]}>
            <CardCardImage1 />
          </View>
          <Text style={[styles.courseTitle, styles.cardFlexBox]}>
            મૂળભૂત સિદ્ધાંતો (Basic Principles)
          </Text>
        </View>
        <CardPreBuild1
          cardCardImage={require("../assets/card--card-image1.png")}
          courseTitle={`પ્રકૃતિ અને પર્યાવરણ  (Nature & Environment)`}
        />
      </View>
      <View style={[styles.cardPreBuildGroup, styles.groupCardPosition]}>
        <CardPreBuild1
          cardCardImage={require("../assets/card--card-image2.png")}
          courseTitle={`વનસ્પતિ અને પ્રાણીઓ  (Plants & Animals)`}
          propMarginLeft={-148.5}
          propHeight={32}
        />
        <CardPreBuild1
          cardCardImage={require("../assets/card--card-image3.png")}
          courseTitle={`પૃથ્વી અને અવકાશ (Earth & Space)`}
          propMarginLeft={18.5}
          propHeight={32}
        />
      </View>
      <View style={[styles.cardPreBuildContainer, styles.groupCardPosition]}>
        <CardPreBuild2
          cardCardImage={require("../assets/card--card-image4.png")}
          courseTitle="દીપ  (Light)"
        />
        <CardPreBuild2
          cardCardImage={require("../assets/card--card-image5.png")}
          courseTitle="સરળ મશીનો  (Simple Machines)"
          propMarginLeft={18.5}
        />
      </View>
      <View style={[styles.groupView, styles.groupCardPosition]}>
        <CardPreBuild2
          cardCardImage={require("../assets/card--card-image6.png")}
          courseTitle={`રંગો અને મેઘધનુષ્ય (Colors & Rainbow)`}
          propMarginLeft={-148.5}
        />
        <CardPreBuild2
          cardCardImage={require("../assets/card--card-image7.png")}
          courseTitle={`પાણી અને તેના સ્વરૂપો (Water & It’s forms)`}
          propMarginLeft={18.5}
        />
      </View>
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  groupCardPosition: {
    height: 134,
    left: "50%",
    top: "50%",
    marginLeft: -148.5,
    position: "absolute",
  },
  cardFlexBox: {
    alignItems: "center",
    width: 100,
  },
  cardCardContent: {
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseTitle: {
    fontSize: FontSize.small_size,
    fontFamily: FontFamily.procionoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    height: 32,
  },
  cardPreBuild: {
    marginTop: -67,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumaquamarine,
    width: 130,
    padding: Padding.p_mini,
    gap: Gap.gap_lg,
    height: 134,
    left: "50%",
    top: "50%",
    marginLeft: -148.5,
    position: "absolute",
  },
  cardPreBuildParent: {
    marginTop: -297,
    width: 297,
    height: 134,
    left: "50%",
    top: "50%",
    marginLeft: -148.5,
    position: "absolute",
  },
  cardPreBuildGroup: {
    marginTop: -142,
    width: 297,
    height: 134,
    left: "50%",
    top: "50%",
    marginLeft: -148.5,
    position: "absolute",
  },
  cardPreBuildContainer: {
    marginTop: 13,
    width: 297,
    height: 134,
    left: "50%",
    top: "50%",
    marginLeft: -148.5,
    position: "absolute",
  },
  groupView: {
    marginTop: 168,
    width: 297,
    height: 134,
    left: "50%",
    top: "50%",
    marginLeft: -148.5,
    position: "absolute",
  },
  science: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Science;
