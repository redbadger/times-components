import { StyleSheet } from "react-native-web";

export default (accum, node) => {
  const flattened = StyleSheet.flatten(node.props.style);

  const style = Object.keys(flattened || {}).length ? { style: flattened } : {};

  return {
    accum,
    props: {
      ...node.props,
      ...style
    }
  };
};
