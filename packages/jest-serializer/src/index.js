import minimalise from "./minimalise";
import { transformProps as rnwTransform, printer as rnwPrinter } from "./rnw";
import flattenStyleTransform from "./flatten-style";
import traverse from "./traverse";

const print = (serialize, accum, element) => serialize(element);

const flattenStyle = traverse(flattenStyleTransform, print);

const minimalWebTransform = minimalise(
  value => value === undefined || typeof value === "function"
);

const minimalWeb = traverse(minimalWebTransform, print);

const minimalNativeTransform = minimalise(
  (value, key) =>
    value === undefined || typeof value === "function" || key === "className"
);

const minimalNative = traverse(minimalNativeTransform, print);

const rnw = includeStyleProps =>
  traverse(rnwTransform(includeStyleProps), rnwPrinter);

const compose = (printer, ...transformers) => {
  return traverse(
    (accum, node) =>
      transformers.reduce(
        ({ accum: a, props: p }, transformer) =>
          transformer(a, { ...node, props: p }),
        {
          accum,
          props: node.props
        }
      ),
    printer
  );
};

const minimalRnw = includeStyleProps =>
  compose(rnwPrinter, minimalWebTransform, rnwTransform(includeStyleProps));

export {
  compose,
  flattenStyle,
  flattenStyleTransform,
  minimalNative,
  minimalNativeTransform,
  minimalRnw,
  minimalWeb,
  minimalWebTransform,
  print,
  rnw,
  rnwPrinter,
  rnwTransform
};
