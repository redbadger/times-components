import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "@times-components/utils";
import { fixtureGenerator } from "@times-components/provider-test-tools";
import { TopicHeadProvider } from "../src/provider";

const pageSize = 5;

const mocks = fixtureGenerator.makeTopicHeadMocks({ delay: 0 });

const renderComponent = child =>
  renderer.create(
    <MockedProvider mocks={mocks}>
      <TopicHeadProvider debounceTimeMs={0} slug="chelsea">
        {child}
      </TopicHeadProvider>
    </MockedProvider>
  );

describe("TopicHeadProvider", () => {
  it("returns query result", done => {
    renderComponent(({ isLoading, topic }) => {
      if (!isLoading) {
        expect(topic).toMatchSnapshot();
        done();
      }

      return null;
    });
  });
});
