import React, { Component } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Button from "@times-components/button";
import ErrorView from "@times-components/error-view";
import { colours } from "@times-components/styleguide";
import { withTrackScrollDepth } from "@times-components/tracking";
import ArticleListError from "./article-list-error";
import ArticleListItem from "./article-list-item";
import ArticleListItemSeparator from "./article-list-item-separator";
import { propTypes, defaultProps } from "./article-list-prop-types";
import styles from "./styles";

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: false
};

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.state = { loadMoreError: null };
  }

  componentWillUnmount() {
    global.cancelAnimationFrame(this.scrollAnimationFrame);
  }

  onViewableItemsChanged(info) {
    if (!info.changed.length) return [];

    return info.changed
      .filter(viewableItem => viewableItem.isViewable)
      .map(
        viewableItem =>
          this.props.onViewed &&
          this.props.onViewed(viewableItem.item, this.props.articles)
      );
  }

  render() {
    const {
      articleListHeader,
      articles,
      articlesLoading,
      count,
      error,
      imageRatio,
      onArticlePress,
      pageSize,
      refetch,
      showImages,
      fetchMore
    } = this.props;

    if (error) {
      return (
        <View style={styles.listErrorContainer}>
          {articleListHeader}
          <View>
            <ArticleListError />
          </View>
          <Button onPress={refetch} style={styles.retryButton} title="Retry" />
        </View>
      );
    }

    const data = articlesLoading
      ? Array(pageSize)
          .fill()
          .map((number, index) => ({
            elementId: `empty.${index}`,
            id: index,
            isLoading: true
          }))
      : articles.map((article, index) => ({
          ...article,
          elementId: `${article.id}.${index}`
        }));

    if (!articlesLoading) this.props.receiveChildList(data);

    const fetchMoreOnEndReached = () =>
      this.state.loadMoreError
        ? null
        : fetchMore(data.length).catch(loadMoreError =>
            this.setState({ loadMoreError })
          );

    const articleListFooter = () => {
      if (data.length >= count) {
        return null;
      } else if (this.state.loadMoreError) {
        return (
          <View>
            <ArticleListItemSeparator />
            <View style={styles.showMoreRetryContainer}>
              <Button
                onPress={() => {
                  this.setState({ loadMoreError: null }, fetchMoreOnEndReached);
                }}
                style={styles.showMoreRetryButton}
                title="Retry"
              />
            </View>
          </View>
        );
      }
      return (
        <View>
          <ArticleListItemSeparator />
          <ActivityIndicator
            style={styles.loadingContainer}
            size="large"
            color={colours.functional.keyline}
          />
        </View>
      );
    };

    return (
      <FlatList
        accessibilityID="scroll-view"
        data={data}
        keyExtractor={item => `${item.elementId}`}
        onViewableItemsChanged={this.onViewableItemsChanged}
        pageSize={pageSize}
        onEndReachedThreshold={2}
        onEndReached={() =>
          // Workaround for iOS Flatlist bug (https://github.com/facebook/react-native/issues/16067)
          data.length > 0 ? fetchMoreOnEndReached() : null
        }
        renderItem={({ item, index }) => (
          <ErrorView>
            {({ hasError }) =>
              hasError ? null : (
                <ArticleListItem
                  {...item}
                  index={index}
                  length={data.length}
                  imageRatio={imageRatio}
                  onPress={e =>
                    onArticlePress(e, { id: item.id, url: item.url })
                  }
                  showImage={showImages}
                  testID={`articleList-${index}`}
                />
              )
            }
          </ErrorView>
        )}
        testID="scroll-view"
        viewabilityConfig={viewabilityConfig}
        ItemSeparatorComponent={() => (
          <View style={styles.listItemSeparatorContainer}>
            <ArticleListItemSeparator />
          </View>
        )}
        ListFooterComponent={articleListFooter}
        ListHeaderComponent={articleListHeader}
      />
    );
  }
}

ArticleList.propTypes = propTypes;
ArticleList.defaultProps = defaultProps;

export { default as ArticleListPageError } from "./article-list-page-error";
export default withTrackScrollDepth(ArticleList);
