import React from "react";
import get from "lodash.get";
import ArticleList, {
  ArticleListPageError
} from "@times-components/article-list";
import { withPageState } from "@times-components/pagination";
import {
  AuthorArticlesNoImagesProvider,
  AuthorArticlesWithImagesProvider
} from "@times-components/provider";
import { ratioTextToFloat } from "@times-components/utils";
import AuthorProfileHead from "./author-profile-head";
import { propTypes, defaultProps } from "./author-profile-prop-types";
import authorProfileTrackingContext from "./author-profile-tracking-context";

const AuthorProfile = ({
  adConfig,
  author,
  error,
  isLoading,
  onArticlePress,
  onNext,
  onPrev,
  onTwitterLinkPress,
  page,
  pageSize: initPageSize,
  refetch,
  slug
}) => {
  if (error) {
    return <ArticleListPageError refetch={refetch} />;
  }

  if (isLoading || !author) {
    return (
      <ArticleList
        adConfig={adConfig}
        articleListHeader={<AuthorProfileHead isLoading />}
        articlesLoading
        fetchMore={() => Promise.resolve()}
        imageRatio={ratioTextToFloat("3:2")}
        isLoading
        pageSize={initPageSize}
        refetch={() => {}}
        showImages
      />
    );
  }

  const {
    articles,
    biography,
    hasLeadAssets,
    image: uri,
    jobTitle,
    name,
    twitter
  } = author;

  const articleListHeader = (
    <AuthorProfileHead
      biography={biography}
      isLoading={false}
      jobTitle={jobTitle}
      name={name}
      onTwitterLinkPress={onTwitterLinkPress}
      twitter={twitter}
      uri={uri}
    />
  );

  const SelectedProvider = hasLeadAssets
    ? AuthorArticlesWithImagesProvider
    : AuthorArticlesNoImagesProvider;

  return (
    <SelectedProvider
      articleImageRatio="3:2"
      debounceTimeMs={250}
      page={page}
      pageSize={initPageSize}
      slug={slug}
    >
      {({
        author: data,
        error: articlesError,
        isLoading: articlesLoading,
        pageSize,
        refetch: refetchArticles,
        fetchMore,
        variables: { imageRatio = "3:2" }
      }) => {
        const fetchMoreArticles = length =>
          fetchMore({
            variables: {
              skip: length
            },
            updateQuery: (prev, { fetchMoreResult }) =>
              fetchMoreResult
                ? {
                    author: {
                      ...prev.author,
                      articles: {
                        ...prev.author.articles,
                        list: [
                          ...prev.author.articles.list,
                          ...fetchMoreResult.author.articles.list
                        ]
                      }
                    }
                  }
                : prev
          });

        return (
          <ArticleList
            adConfig={adConfig}
            articleListHeader={articleListHeader}
            articles={get(data, "articles.list", [])}
            articlesLoading={articlesLoading}
            count={get(articles, "count", 0)}
            error={articlesError}
            imageRatio={ratioTextToFloat(imageRatio)}
            onArticlePress={onArticlePress}
            onNext={onNext}
            onPrev={onPrev}
            page={page}
            pageSize={pageSize}
            refetch={refetchArticles}
            fetchMore={fetchMoreArticles}
            showImages={hasLeadAssets}
          />
        );
      }}
    </SelectedProvider>
  );
};

AuthorProfile.propTypes = propTypes;
AuthorProfile.defaultProps = defaultProps;

export default withPageState(authorProfileTrackingContext(AuthorProfile));
