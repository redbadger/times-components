const jestConfigurator = require("@times-components/jest-configurator").default;
const path = require("path");

module.exports = jestConfigurator("web", __dirname, {
  coverageIgnoreGlobs: ["data-helper.js", "article-content.js"],
  setupTestFrameworkScriptFile: path.join(__dirname, "./serializers")
});
