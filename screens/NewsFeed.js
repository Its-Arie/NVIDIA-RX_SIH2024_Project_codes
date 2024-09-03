import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import BaseMenuNavigation4 from "../components/BaseMenuNavigation4";
import Base from "../components/Base";
import BaseNavigation2 from "../components/BaseNavigation2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const NewsFeed = () => {
  return (
    <View style={styles.newsFeed}>
      <BaseMenuNavigation4 mathematics="સમાચાર લેખ (News Article)" />
      <Base />
      <View style={styles.newFeedsWrapper}>
        <Text style={styles.newFeeds}>New Feeds</Text>
      </View>
      <BaseNavigation2 />
      <FrameComponent1 />
      <FrameComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  newFeeds: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.promptSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  newFeedsWrapper: {
    position: "absolute",
    top: 87,
    left: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  newsFeed: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default NewsFeed;
