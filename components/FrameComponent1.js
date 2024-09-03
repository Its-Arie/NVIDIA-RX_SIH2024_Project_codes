import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.groupItem, styles.groupChildPosition]} />
        <Image
          style={[styles.image3Icon, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <View style={[styles.groupInner, styles.groupChildPosition]} />
        <View style={[styles.rectangleView, styles.image2IconPosition]} />
        <Image
          style={[styles.image2Icon, styles.image2IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text
          style={[styles.academicBankOf, styles.academicBankOfTypo]}
        >{`Academic Bank Of Credit And Other Big Announcements By PM Modi
Reservation for medical and dental courses was also among the announcements.`}</Text>
        <Text style={[styles.indiasFirstSign, styles.academicBankOfTypo]}>
          India's First Sign Language Dictionary To Come Up Soon
        </Text>
        <Text style={[styles.s, styles.sTypo]}>s</Text>
        <Text style={[styles.ncertTextbooksTo, styles.academicBankOfTypo]}>
          NCERT Textbooks to be Available in Indian Sign Language
        </Text>
        <Text style={[styles.s1, styles.sTypo]}>s</Text>
        <Text style={[styles.s2, styles.sTypo]}>s</Text>
        <Text style={[styles.s3, styles.sTypo]}>s</Text>
      </View>
      <Image
        style={[styles.image1Icon, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 150,
    left: 0,
    position: "absolute",
  },
  image2IconPosition: {
    top: 166,
    height: 150,
    left: 0,
    position: "absolute",
  },
  academicBankOfTypo: {
    width: 134,
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_smi,
    left: 202,
    height: 150,
    position: "absolute",
  },
  sTypo: {
    width: 150,
    color: Color.colorWhite,
    fontFamily: FontFamily.promptRegular,
    fontSize: FontSize.size_xl,
    left: 186,
    textAlign: "left",
    height: 150,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
    top: 0,
  },
  groupItem: {
    top: 332,
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
  },
  image3Icon: {
    width: 196,
    top: 332,
  },
  groupInner: {
    top: 830,
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
  },
  image2Icon: {
    width: 196,
  },
  groupChild1: {
    top: 664,
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
  },
  groupChild2: {
    top: 498,
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
  },
  groupChild3: {
    top: 996,
    backgroundColor: Color.colorGainsboro_200,
    width: 336,
  },
  academicBankOf: {
    color: Color.colorBlack,
    width: 134,
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_smi,
    left: 202,
    top: 0,
  },
  indiasFirstSign: {
    color: Color.colorBlack,
    width: 134,
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_smi,
    left: 202,
    top: 332,
  },
  s: {
    top: 830,
  },
  ncertTextbooksTo: {
    color: Color.colorGray_200,
    width: 134,
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_smi,
    left: 202,
    top: 166,
  },
  s1: {
    top: 664,
  },
  s2: {
    top: 498,
  },
  s3: {
    top: 996,
  },
  rectangleParent: {
    height: 1146,
    left: 0,
    top: 0,
    width: 336,
    position: "absolute",
  },
  image1Icon: {
    width: 196,
    top: 0,
  },
  groupParent: {
    top: 501,
    left: 19,
    height: 226,
    width: 336,
    position: "absolute",
  },
});

export default FrameComponent1;
