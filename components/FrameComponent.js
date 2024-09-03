import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.newsFeedInner}>
      <View style={styles.frameParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-40.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-43.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-41.png")}
        />
        <View
          style={[
            styles.artworks000501511422Fdot9jTParent,
            styles.groupChildLayout,
          ]}
        >
          <View style={styles.artworks000501511422Fdot9jT} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Image
          style={[styles.frameIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-42.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-45.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    overflow: "hidden",
    width: 232,
    top: 0,
    height: 331,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 737,
  },
  groupInner: {
    left: 246,
  },
  artworks000501511422Fdot9jT: {
    backgroundColor: Color.colorSilver,
    width: 232,
    left: 0,
    top: 0,
    height: 331,
    position: "absolute",
  },
  vectorIcon: {
    top: 275,
    left: 23,
    width: 38,
    height: 38,
    position: "absolute",
  },
  artworks000501511422Fdot9jTParent: {
    left: 983,
    backgroundColor: Color.colorWhite,
  },
  frameIcon: {
    left: 491,
  },
  groupChild1: {
    left: 1228,
  },
  frameParent: {
    width: 1460,
    left: 0,
    top: 0,
    height: 331,
    position: "absolute",
  },
  newsFeedInner: {
    top: 137,
    left: 19,
    width: 334,
    height: 331,
    position: "absolute",
  },
});

export default FrameComponent;
