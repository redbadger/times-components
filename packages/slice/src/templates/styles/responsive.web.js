import { View } from "react-native";
import withResponsiveStyles from "@times-components/responsive-styles";
import { colours, spacing } from "@times-components/styleguide";

export const SliceContainer = withResponsiveStyles(View, {
  base: () => `
    align-items: center;
    border-bottom-color: ${colours.functional.keyline};
    border-bottom-width: 1px;
    border-style: solid;
    flex: 1;
    justify-content: center;
  `,
  dvp: () => `
    border-bottom-width: 0.5px;
  `
});
SliceContainer.displayName = "SliceContainer";

export const getSeparator = ({ hasLeftRightMargin }) => {
  const Separator = withResponsiveStyles(View, {
    base: () => `
      border-bottom-color: ${colours.functional.keyline};
      border-bottom-style: solid;
      border-bottom-width: 1px;
      flex: 1;
      margin-bottom: ${spacing(2)};
      margin-top: ${spacing(2)};
      min-width: auto;
    `,
    mediumUp: () => `
      border-bottom: none;
      border-right-color: ${colours.functional.keyline};
      border-right-style: solid;
      border-right-width: 1px;
      flex: 0 !important;
      margin: ${hasLeftRightMargin ? `0 ${spacing(2)}` : `0`};
    `
  });
  Separator.displayName = "Separator";
  return Separator;
};
