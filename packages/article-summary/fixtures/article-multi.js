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
  bylineProps: {
    ast: [
      {
        name: "author",
        attributes: {
          slug: "camilla-long"
        },
        children: [
          {
            name: "text",
            attributes: {
              value: "Camilla Long"
            },
            children: []
          }
        ]
      },
      {
        name: "inline",
        attributes: {},
        children: [
          {
            name: "text",
            attributes: {
              value: ", Environment Editor"
            },
            children: []
          }
        ]
      }
    ]
  },
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
        },
        {
          name: "paragraph",
          attributes: {},
          children: [
            {
              name: "text",
              attributes: {
                value:
                  "Mali sniffed out explosives and insurgents during a gunfight that lasted seven and a half hours to help a team of Special Boat Service (SBS) operators hunt down and kill more than a dozen"
              },
              children: []
            }
          ]
        }
      ]}
    />
  )
};
