/* global context */
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import {
  SliceContainer,
  getSeparator
} from "../../src/templates/styles/responsive";
import {
  ChildContainer,
  getChildrenContainer
} from "../../src/templates/standard/responsive";
import { getConfigWrapper as getStandardConfigWrapper } from "../../src/templates/standard/config";
import {
  SupportsContainer,
  getSupportContainer,
  getContainer,
  getLeadContainer
} from "../../src/templates/leadandtwo/responsive";
import { getConfigWrapper as getLeadAndTwoConfigWrapper } from "../../src/templates/leadandtwo/config";
import {
  getSeparator as opinionGetSeparator,
  getSupportsContainer as opinionGetSupportsContainer,
  getSupportContainer as opinionGetSupportContainer,
  getContainer as opinionGetContainer,
  getOpinionContainer as opinionGetOpinionContainer
} from "../../src/templates/opinionandtwo/responsive";
import { getConfigWrapper as getOpinionAndTwoConfigWrapper } from "../../src/templates/opinionandtwo/config";

describe("Slice tests on web", () => {
  context("responsive shared components", () => {
    it("should render SliceContainer correctly", () => {
      expect(renderer.create(<SliceContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render Separator correctly", () => {
      let Separator = getSeparator({ hasLeftRightMargin: false });
      expect(renderer.create(<Separator />).toJSON()).toMatchSnapshot();
      Separator = getSeparator({ hasLeftRightMargin: true });
      expect(renderer.create(<Separator />).toJSON()).toMatchSnapshot();
    });
  });

  context("responsive default template components", () => {
    it("should render ChildContainer correctly", () => {
      expect(renderer.create(<ChildContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render ChildrenContainer correctly", () => {
      let ChildrenContainer = getChildrenContainer({ childCount: 1 });
      expect(renderer.create(<ChildrenContainer />).toJSON()).toMatchSnapshot();
      ChildrenContainer = getChildrenContainer({ childCount: 3 });
      expect(renderer.create(<ChildrenContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render ConfigWrapper correctly", () => {
      let ConfigWrapper = getStandardConfigWrapper({ itemCount: 1 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
      ConfigWrapper = getStandardConfigWrapper({ itemCount: 3 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
    });
  });

  context("responsive lead and two template components", () => {
    it("should render SupportsContainer correctly", () => {
      expect(renderer.create(<SupportsContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render SupportContainer correctly", () => {
      let SupportContainer = getSupportContainer({ index: 0 });
      expect(renderer.create(<SupportContainer />).toJSON()).toMatchSnapshot();
      SupportContainer = getSupportContainer({ index: 1 });
      expect(renderer.create(<SupportContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render Container correctly", () => {
      let Container = getContainer({ hasSupports: true });
      expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
      Container = getContainer({ hasSupports: false });
      expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
    });

    it("should render LeadContainer correctly", () => {
      let LeadContainer = getLeadContainer({
        hasSupports: true,
        supportCount: 1
      });
      expect(renderer.create(<LeadContainer />).toJSON()).toMatchSnapshot();
      LeadContainer = getLeadContainer({
        hasSupports: true,
        supportCount: 2
      });
      expect(renderer.create(<LeadContainer />).toJSON()).toMatchSnapshot();
      LeadContainer = getLeadContainer({ hasSupports: false });
      expect(renderer.create(<LeadContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render ConfigWrapper correctly", () => {
      let ConfigWrapper = getLeadAndTwoConfigWrapper({ supportCount: 1 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
      ConfigWrapper = getLeadAndTwoConfigWrapper({ supportCount: 2 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
    });
  });

  context("responsive opinion and two template components", () => {
    it("should render Separator correctly", () => {
      let Separator = opinionGetSeparator({
        hasLeftRightMargin: false,
        itemCount: 1
      });
      expect(renderer.create(<Separator />).toJSON()).toMatchSnapshot();
      Separator = opinionGetSeparator({
        hasLeftRightMargin: true,
        itemCount: 3
      });
      expect(renderer.create(<Separator />).toJSON()).toMatchSnapshot();
    });

    it("should render Container correctly", () => {
      let Container = opinionGetContainer({ supportCount: 0 });
      expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
      Container = opinionGetContainer({ supportCount: 1 });
      expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
    });

    it("should render OpinionContainer correctly", () => {
      let OpinionContainer = opinionGetOpinionContainer({
        hasSupports: true,
        supportCount: 1
      });
      expect(renderer.create(<OpinionContainer />).toJSON()).toMatchSnapshot();
      OpinionContainer = opinionGetOpinionContainer({
        hasSupports: true,
        supportCount: 2
      });
      expect(renderer.create(<OpinionContainer />).toJSON()).toMatchSnapshot();
      OpinionContainer = opinionGetOpinionContainer({
        hasSupports: false,
        supportCount: 0
      });
      expect(renderer.create(<OpinionContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render SupportsContainer correctly", () => {
      let Separator = opinionGetSupportsContainer({ supportCount: 1 });
      expect(renderer.create(<Separator />).toJSON()).toMatchSnapshot();
      Separator = opinionGetSupportsContainer({ supportCount: 2 });
      expect(renderer.create(<Separator />).toJSON()).toMatchSnapshot();
    });

    it("should render SupportContainer correctly", () => {
      let SupportContainer = opinionGetSupportContainer({
        index: 0,
        supportCount: 1
      });
      expect(renderer.create(<SupportContainer />).toJSON()).toMatchSnapshot();
      SupportContainer = opinionGetSupportContainer({
        index: 1,
        supportCount: 2
      });
      expect(renderer.create(<SupportContainer />).toJSON()).toMatchSnapshot();
    });

    it("should render ConfigWrapper correctly", () => {
      let ConfigWrapper = getOpinionAndTwoConfigWrapper({ supportCount: 0 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
      ConfigWrapper = getOpinionAndTwoConfigWrapper({ supportCount: 1 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
      ConfigWrapper = getOpinionAndTwoConfigWrapper({ supportCount: 2 });
      expect(renderer.create(<ConfigWrapper />).toJSON()).toMatchSnapshot();
    });
  });
});
