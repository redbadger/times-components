const jestConfigurator = require("@times-components/jest-configurator").default;
const path = require("path");

module.exports = jestConfigurator("ios", __dirname, {
  setupTestFrameworkScriptFile: path.join(__dirname, "./serializers")
});
