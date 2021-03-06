import articleListWithImagesFixture from "@times-components/provider-test-tools/fixtures/author-profile/article-list-with-images.json";

export default (skip, first) => ({
  articles: {
    ...articleListWithImagesFixture.data.author.articles,
    list: articleListWithImagesFixture.data.author.articles.list.slice(
      skip,
      skip + first
    )
  }
});
