import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.baseBadgeParent}>
      <View style={[styles.baseBadge, styles.baseShadowBox]}>
        <Text style={styles.retry}>પુન:પ્રયત્ન કરો (Retry)</Text>
      </View>
      <Pressable
        style={[styles.baseBadge1, styles.baseShadowBox]}
        onPress={() => navigation.navigate("SearchMenu")}
      >
        <Image
          style={styles.contentListFormat}
          resizeMode="cover"
          source={require("../assets/content--list-format.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  baseShadowBox: {
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumaquamarine,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    position: "absolute",
  },
  retry: {
    fontSize: FontSize.typographyBoldTextDefault14_size,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  baseBadge: {
    left: 102,
  },
  contentListFormat: {
    marginLeft: -20,
    top: 12,
    left: "50%",
    width: 40,
    height: 42,
    overflow: "hidden",
    zIndex: 0,
    position: "absolute",
  },
  baseBadge1: {
    left: 0,
    width: 66,
    height: 66,
  },
  baseBadgeParent: {
    top: 668,
    width: 201,
    height: 66,
    left: 102,
    position: "absolute",
  },
});

export default GroupComponent1;
