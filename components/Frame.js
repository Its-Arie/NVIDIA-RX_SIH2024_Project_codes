import React, { useMemo } from "react";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({ frameViewPosition, frameViewTop, frameViewLeft }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewPosition, frameViewTop, frameViewLeft]);

  return (
    <View style={[styles.property1default, frameViewStyle]}>
      <View
        style={[
          styles.property1defaultChild,
          styles.property1defaultChildLayout3,
        ]}
      />
      <View
        style={[styles.property1defaultItem, styles.property1defaultPosition]}
      />
      <View
        style={[styles.property1defaultInner, styles.property1defaultLayout]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[
          styles.property1defaultChild1,
          styles.property1defaultChildLayout2,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild2,
          styles.property1defaultChildPosition4,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild3,
          styles.property1defaultChildLayout1,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild4,
          styles.property1defaultChildPosition3,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild5,
          styles.property1defaultChildPosition3,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild6,
          styles.property1defaultChildPosition2,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild7,
          styles.property1defaultChildPosition2,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild8,
          styles.property1defaultChildPosition1,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild9,
          styles.property1defaultChildPosition1,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild10,
          styles.property1defaultChildPosition,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild11,
          styles.property1defaultChildPosition,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild12,
          styles.property1defaultChildLayout3,
        ]}
      />
      <Text style={[styles.mon, styles.textTypo]}>Mon</Text>
      <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
      <Text style={[styles.wed, styles.tueTypo]}>Wed</Text>
      <Text style={[styles.thus, styles.friTypo]}>Thus</Text>
      <Text style={[styles.fri, styles.friTypo]}>Fri</Text>
      <Text style={[styles.sat, styles.friTypo]}>Sat</Text>
      <Text style={[styles.sun, styles.friTypo]}>Sun</Text>
      <View style={[styles.lineView, styles.property1defaultChildLayout]} />
      <View
        style={[
          styles.property1defaultChild13,
          styles.property1defaultChildLayout,
        ]}
      />
      <View
        style={[
          styles.property1defaultChild14,
          styles.property1defaultChildLayout,
        ]}
      />
      <Text style={[styles.text, styles.textTypo]}>15</Text>
      <Text style={[styles.text1, styles.tueTypo]}>30</Text>
      <Text style={[styles.text2, styles.textTypo]}>45</Text>
      <View style={styles.property1defaultChild15} />
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultChildLayout3: {
    opacity: 0.5,
    width: 2,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  property1defaultPosition: {
    width: 5,
    left: 55,
    bottom: 37,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  property1defaultLayout: {
    height: 1,
    backgroundColor: Color.colorRed,
  },
  rectangleViewPosition: {
    left: 97,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  property1defaultChildLayout2: {
    height: 3,
    backgroundColor: Color.colorRed,
  },
  property1defaultChildPosition4: {
    left: 137,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  property1defaultChildLayout1: {
    height: 2,
    backgroundColor: Color.colorRed,
  },
  property1defaultChildPosition3: {
    left: 177,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  property1defaultChildPosition2: {
    left: 217,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  property1defaultChildPosition1: {
    left: 253,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  property1defaultChildPosition: {
    left: 289,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    fontSize: FontSize.small_size,
    position: "absolute",
  },
  tueTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    fontSize: FontSize.small_size,
    position: "absolute",
  },
  friTypo: {
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    fontSize: FontSize.small_size,
    top: 216,
    position: "absolute",
  },
  property1defaultChildLayout: {
    width: 10,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 27,
    height: 1,
    position: "absolute",
  },
  property1defaultChild: {
    left: 31,
    height: 191,
    bottom: 35,
    opacity: 0.5,
    width: 2,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
  },
  property1defaultItem: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
  },
  property1defaultInner: {
    width: 5,
    left: 55,
    bottom: 37,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
  },
  property1defaultChild1: {
    left: 97,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  property1defaultChild2: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
  },
  property1defaultChild3: {
    left: 137,
    width: 5,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    bottom: 35,
    position: "absolute",
  },
  property1defaultChild4: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
  },
  property1defaultChild5: {
    height: 3,
    backgroundColor: Color.colorRed,
  },
  property1defaultChild6: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
  },
  property1defaultChild7: {
    height: 3,
    backgroundColor: Color.colorRed,
  },
  property1defaultChild8: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
    bottom: 37,
    left: 253,
  },
  property1defaultChild9: {
    bottom: 36,
    height: 1,
    backgroundColor: Color.colorRed,
  },
  property1defaultChild10: {
    backgroundColor: Color.colorLavender_200,
    height: 191,
  },
  property1defaultChild11: {
    height: 2,
    backgroundColor: Color.colorRed,
  },
  property1defaultChild12: {
    bottom: -236,
    left: 33,
    height: 271,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    opacity: 0.5,
    width: 2,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
  },
  mon: {
    left: 42,
    width: 26,
    top: 216,
  },
  tue: {
    left: 87,
    height: 14,
    width: 24,
    top: 216,
  },
  wed: {
    left: 125,
    height: 12,
    width: 28,
    top: 216,
  },
  thus: {
    left: 164,
    width: 31,
  },
  fri: {
    left: 206,
    width: 28,
  },
  sat: {
    left: 243,
    width: 24,
  },
  sun: {
    left: 281,
    width: 21,
  },
  lineView: {
    top: 163,
  },
  property1defaultChild13: {
    top: 110,
  },
  property1defaultChild14: {
    top: 62,
  },
  text: {
    top: 154,
    left: 15,
    width: 12,
  },
  text1: {
    top: 101,
    left: 12,
    width: 15,
    height: 15,
  },
  text2: {
    top: 54,
    left: 11,
    width: 16,
  },
  property1defaultChild15: {
    top: 12,
    left: 9,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkblue_100,
    width: 310,
    height: 226,
    position: "absolute",
  },
  property1default: {
    width: 332,
    height: 251,
    overflow: "hidden",
  },
});

export default Frame;
