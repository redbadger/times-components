/* eslint-disable react/prop-types */

import "react-native";
import React from "react";
import { AdComposer } from "@times-components/ad";
import { fixtureGenerator } from "@times-components/provider-test-tools";
import StorybookProvider from "@times-components/storybook/storybook-provider";
import storybookReporter from "@times-components/tealium-utils";
import { MockedProvider } from "@times-components/utils";
import Topic from "./src/topic";
import TopicProvider from "../provider/src/topic";

const preventDefaultedAction = decorateAction =>
  decorateAction([
    ([e, ...args]) => {
      e.preventDefault();
      return ["[SyntheticEvent (storybook prevented default)]", ...args];
    }
  ]);

const pageSize = 5;
const slug = "chelsea";

const { defaultProps: { adConfig } } = AdComposer;

const getProps = decorateAction => ({
  adConfig,
  analyticsStream: storybookReporter,
  onArticlePress: preventDefaultedAction(decorateAction)("onArticlePress"),
  page: 1,
  pageSize,
  slug
});

const mocks = fixtureGenerator.makeTopicArticleMocks({
  withImages: true,
  pageSize
});

export default {
  name: "Pages/Topic",
  children: [
    {
      type: "story",
      name: "Default",
      component: (_, { decorateAction }) => (
        <StorybookProvider mocks={mocks}>
          <TopicProvider debounceTimeMs={0} slug={slug}>
            {({ topic, error, isLoading }) => (
              <Topic
                {...getProps(decorateAction)}
                topic={topic}
                error={error}
                isLoading={isLoading}
              />
            )}
          </TopicProvider>
        </StorybookProvider>
      )
    },
    {
      type: "story",
      name: "Loading",
      component: (_, { decorateAction }) => (
        <MockedProvider mocks={mocks}>
          <Topic {...getProps(decorateAction)} isLoading />
        </MockedProvider>
      )
    },
    {
      type: "story",
      name: "With an error getting Topic",
      component: (_, { decorateAction }) => (
        <MockedProvider
          mocks={fixtureGenerator.makeMocksWithTopicError({
            pageSize,
            slug,
            withImages: true
          })}
        >
          <TopicProvider debounceTimeMs={0} slug={slug}>
            {({ topic, error, isLoading, refetch }) => (
              <Topic
                {...getProps(decorateAction)}
                topic={topic}
                error={error}
                isLoading={isLoading}
                refetch={refetch}
              />
            )}
          </TopicProvider>
        </MockedProvider>
      )
    }
  ]
};
