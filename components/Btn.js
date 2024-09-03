import React, { useMemo } from "react";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Btn = ({
  text = "E-mail or Phone No.",
  btnPosition,
  btnWidth,
  btnHeight,
  btnMarginLeft,
  btnTop,
  btnLeft,
}) => {
  const btnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", btnPosition),
      ...getStyleValue("width", btnWidth),
      ...getStyleValue("height", btnHeight),
      ...getStyleValue("marginLeft", btnMarginLeft),
      ...getStyleValue("top", btnTop),
      ...getStyleValue("left", btnLeft),
    };
  }, [btnPosition, btnWidth, btnHeight, btnMarginLeft, btnTop, btnLeft]);

  return (
    <View style={[styles.property1default, btnStyle]}>
      <View style={styles.eMailOrPhoneNoWrapper}>
        <Text style={styles.eMailOrPhone}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eMailOrPhone: {
    fontSize: FontSize.small_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  eMailOrPhoneNoWrapper: {
    height: 16,
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  property1default: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    width: 220,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
  },
});

export default Btn;
