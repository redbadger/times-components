import React from "react";
import get from "lodash.get";
import ArticleList from "@times-components/article-list";
import { withPageState } from "@times-components/pagination";
import { TopicArticlesProvider } from "@times-components/provider";
import { ratioTextToFloat } from "@times-components/utils";
import { propTypes, defaultProps } from "./topic-prop-types";
import topicTrackingContext from "./topic-tracking-context";
import TopicHead from "./topic-head";

const Topic = ({
  page,
  pageSize: initPageSize,
  onArticlePress,
  onNext,
  onPrev,
  slug,
  topic
}) => {
  const { name, description } = topic;

  const articleListHeader = (
    <TopicHead name={name} description={description} isLoading={false} />
  );

  const updateQuery = (prev, { fetchMoreResult }) =>
    fetchMoreResult
      ? {
          topic: {
            ...prev.topic,
            articles: {
              ...prev.topic.articles,
              list: [
                ...prev.topic.articles.list,
                ...fetchMoreResult.topic.articles.list
              ]
            }
          }
        }
      : prev;

  return (
    <TopicArticlesProvider
      articleImageRatio="3:2"
      debounceTimeMs={250}
      page={page}
      pageSize={initPageSize}
      slug={slug}
    >
      {({
        topic: data,
        error: articlesError,
        fetchMore: fetchMoreArticles,
        isLoading: articlesLoading,
        pageSize,
        refetch: refetchArticles,
        variables: { imageRatio = "3:2" }
      }) => (
        <ArticleList
          articleListHeader={articleListHeader}
          articles={get(data, "articles.list", [])}
          articlesLoading={articlesLoading}
          count={get(data, "articles.count", 0)}
          error={articlesError}
          fetchMore={fetchMoreArticles}
          imageRatio={ratioTextToFloat(imageRatio)}
          onArticlePress={onArticlePress}
          onNext={onNext}
          onPrev={onPrev}
          page={page}
          pageSize={pageSize}
          refetch={refetchArticles}
          showImages
          updateQuery={updateQuery}
        />
      )}
    </TopicArticlesProvider>
  );
};

Topic.propTypes = propTypes;
Topic.defaultProps = defaultProps;

export default withPageState(topicTrackingContext(Topic));
