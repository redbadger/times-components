import React from "react";
import { View } from "react-native";
import ArticleSummary from "./src/article-summary";

import defaultFixture from "./fixtures/default";
import withSummaryLinksFixture from "./fixtures/with-summary-links";
import withBylineLinksFixture from "./fixtures/with-byline-links";
import articleMultiFixture from "./fixtures/article-multi";
import noBylineFixture from "./fixtures/no-byline";
import noLabelFixture from "./fixtures/no-label";
import videoLabelFixture from "./fixtures/video-label";
import reviewFixture from "./fixtures/review";

const story = m => <View style={{ padding: 20 }}>{m}</View>;

export default {
  name: "Composed/Article Summary",
  children: [
    {
      type: "story",
      name: "Default",
      component: () => story(<ArticleSummary {...defaultFixture} />)
    },
    {
      type: "story",
      name: "With links in summary",
      component: () => story(<ArticleSummary {...withSummaryLinksFixture} />)
    },
    {
      type: "story",
      name: "With byline links",
      component: () => story(<ArticleSummary {...withBylineLinksFixture} />)
    },
    {
      type: "story",
      name: "No byline",
      component: () => story(<ArticleSummary {...noBylineFixture} />)
    },
    {
      type: "story",
      name: "Summary with multiple paragraphs",
      component: () => story(<ArticleSummary {...articleMultiFixture} />)
    },
    {
      type: "story",
      name: "Video label",
      component: () => story(<ArticleSummary {...videoLabelFixture} />)
    },
    {
      type: "story",
      name: "No label",
      component: () => story(<ArticleSummary {...noLabelFixture} />)
    },
    {
      type: "story",
      name: "Review/Rating summary",
      component: () => story(<ArticleSummary {...reviewFixture} />)
    }
  ]
};
