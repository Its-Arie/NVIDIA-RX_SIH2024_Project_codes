import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BaseNavigation from "../components/BaseNavigation";
import BaseMenuNavigation4 from "../components/BaseMenuNavigation4";
import CardPreBuild3 from "../components/CardPreBuild3";
import Base from "../components/Base";
import { Border, Color } from "../GlobalStyles";

const SearchMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchMenu}>
      <BaseNavigation
        iconsPlayCircle={require("../assets/icons--playcircle.png")}
      />
      <BaseMenuNavigation4 mathematics="Explore" />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image10.png")}
        prop="સાંકેતિક ભાષા શોધ"
        signLanguageDetection=" (Sign Language Detection)"
        onCardPreBuildPress={() => navigation.navigate("ImageTracking")}
      />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image11.png")}
        prop="લેખન પ્રેક્ટિસ"
        signLanguageDetection=" (Writing Practice)"
        currentProgressTop={205}
        onCardPreBuildPress={() => navigation.navigate("WritingPad")}
      />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image12.png")}
        prop="લખાણમાં સહી કરવા/ સહી કરવા માટેનું લખાણ "
        signLanguageDetection="(Text to Sign / Sign to Text)"
        currentProgressTop={290}
        onCardPreBuildPress={() => navigation.navigate("TextToSign")}
      />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image12.png")}
        prop="સહી કરવા માટેનું બોલવું/બોલવા માટે સહી કરવી"
        signLanguageDetection=" (Speech to Sign / Sign to Speech)"
        currentProgressTop={378}
        onCardPreBuildPress={() => navigation.navigate("SpeechToSign")}
      />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image12.png")}
        prop="શબ્દો શીખો"
        signLanguageDetection=" (Learn Words)"
        currentProgressTop={556}
        onCardPreBuildPress={() => navigation.navigate("LearnWords")}
      />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image12.png")}
        prop="વાક્યો શીખો"
        signLanguageDetection=" (Learn Sentences)"
        currentProgressTop={646}
        onCardPreBuildPress={() => navigation.navigate("LearnSentences")}
      />
      <CardPreBuild3
        cardCardImage={require("../assets/card--card-image12.png")}
        prop="બોલવા માટેનું લખાણ / લખાણમાં બોલી "
        signLanguageDetection="(Text to Speech / Speech to Text)"
        currentProgressTop={467}
        onCardPreBuildPress={() => navigation.navigate("TextToSpeech")}
      />
      <Base />
    </View>
  );
};

const styles = StyleSheet.create({
  searchMenu: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SearchMenu;
