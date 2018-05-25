import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import propTypes from "./article-list-retry-button-prop-types";
import RetryButtonText from "./article-list-retry-button-text";
import styles from "./styles";

const ArticleListRetryButton = ({ refetch }) => (
  <TouchableOpacity accessible accessibilityLabel="Retry" onPress={refetch}>
    <View style={styles.listErrorButton}>
      <RetryButtonText />
    </View>
  </TouchableOpacity>
);

ArticleListRetryButton.propTypes = propTypes;

export default ArticleListRetryButton;
