const resolveSync = require("ncjsm/resolve/sync");

const slsw = require(resolveSync(process.cwd(), "serverless-webpack").realPath);
const path = require("path");

module.exports = {
  entry: slsw.lib.entries,
  externals: [
    (context, request, callback) => {
      console.log("request", request, "context", context);
      callback();
    },
  ],
  target: "node",
  devtool: "nosources-source-map",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  output: {
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    sourceMapFilename: "[file].map",
  },
  performance: {
    hints: false,
  },
  stats: {
    logging: "verbose",
    moduleTrace: true,
    errorDetails: true,
  },
  optimization: {
    minimize: false,
  },
  module: {},
  plugins: [],
};
