import React from "react";
import { ArticleSummaryHeadline, ArticleSummaryContent } from "../";

export default {
  datePublicationProps: {
    date: "2017-11-17T00:01:00.000Z",
    publication: "TIMES"
  },
  headline: () => (
    <ArticleSummaryHeadline headline="Top medal for forces dog who took a bite out of the Taliban" />
  ),
  content: () => (
    <ArticleSummaryContent
      ast={[
        {
          name: "paragraph",
          attributes: {},
          children: [
            {
              name: "text",
              attributes: {
                value:
                  "The special forces dog fought on under fire, even after shrapnel from Taliban grenades tore into his belly and legs, blew out a front tooth and damaged his right ear."
              },
              children: []
            }
          ]
        }
      ]}
    />
  )
};
