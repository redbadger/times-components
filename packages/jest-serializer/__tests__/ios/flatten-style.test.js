import React from "react";
import { StyleSheet, Text } from "react-native";
import renderer from "react-test-renderer";
import { flattenStyle } from "../../src";

describe("The flatten style serializer should", () => {
  describe("for native", () => {
    expect.addSnapshotSerializer(flattenStyle);

    it("not remove className", () => {
      const styles = StyleSheet.create({
        colored: {
          color: "red"
        },
        padded: {
          padding: 1
        }
      });

      const component = <Text style={[styles.colored, styles.padded]} />;
      const tree = renderer.create(component);

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
