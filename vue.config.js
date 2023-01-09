const webpack = require("webpack");
const { NODE_ENV, AUTHOR } = process.env;
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(NODE_ENV),
          AUTHOR: JSON.stringify(AUTHOR),
        },
      }),
    ],
  },
};
