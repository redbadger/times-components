import { StyleSheet } from "react-native";
import { spacing } from "@times-components/styleguide";
import sharedStyles from "./shared";
import { fonts, colours } from "@times-components/styleguide";

const styles = StyleSheet.create({
  ...sharedStyles,
  listItemContainer: {
    paddingBottom: spacing(3),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    paddingTop: spacing(3)
  },
  listItemSeparatorContainer: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2)
  },
  pageErrorContainer: {
    flex: 1,
    margin: spacing(2)
  },
  pageErrorImageContainer: {
    alignSelf: "center",
    marginBottom: spacing(4),
    marginTop: spacing(4),
    width: "60%"
  },
  listErrorButton: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowRadius: 20,
    shadowOpacity: 0.24,
    borderRadius: 2,
    alignItems: "center",
    backgroundColor: colours.functional.action,
    flex: 1,
    justifyContent: "center",
    height: 36,
    paddingVertical: spacing(4)
  },
  listErrorButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: fonts.supporting,
    fontWeight: "500"
  },
  listErrorContainer: {
    flex: 1,
    margin: spacing(3)
  },
  loadingContainer: {
    paddingVertical: spacing(5)
  },
  showMoreRetryContainer: {
    padding: spacing(5)
  },
  showMoreRetryButton: {
    elevation: 10
  }
});

export default styles;
