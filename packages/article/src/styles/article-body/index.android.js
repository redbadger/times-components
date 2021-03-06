import { StyleSheet } from "react-native";
import { fonts, fontSizes, spacing } from "@times-components/styleguide";
import sharedStyles from "./shared";
import globalStyle from "../shared";

const androidStyles = {
  ...sharedStyles,
  leadAsset: {
    marginBottom: 6
  },
  articleTextElement: {
    ...sharedStyles.articleTextElement,
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyMobile,
    fontStyle: "normal",
    marginBottom: spacing(4)
  }
};

const styles = StyleSheet.create({
  ...globalStyle,
  ...androidStyles
});

export default styles;
