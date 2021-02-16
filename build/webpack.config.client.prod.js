var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var TerserPlugin = require("terser-webpack-plugin");
var CircularDependencyPlugin = require("circular-dependency-plugin");

var config = require("./../config");

var BASE_PATH = process.env.BASE_PATH || "/";

module.exports = {
  devtool: "inline-source-map",
  mode: "production",
  entry: {
    app: ["react-hot-loader/patch", path.join(config.srcDir, "index.js")],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: config.distDir,
    publicPath: BASE_PATH,
  },
  resolve: {
    modules: ["node_modules", config.srcDir],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      template: config.srcHtmlLayout,
      inject: false,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractCssChunks(),
    new OptimizeCssAssetsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.BASE_PATH": JSON.stringify(BASE_PATH),
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: config.srcDir,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // Modular Styles
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          { loader: "postcss-loader" },
        ],
        exclude: [path.resolve(config.srcDir, "styles")],
        include: [config.srcDir],
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              includePaths: config.scssIncludes,
            },
          },
        ],
        exclude: [path.resolve(config.srcDir, "styles")],
        include: [config.srcDir],
      },
      // Global Styles
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
        include: [path.resolve(config.srcDir, "styles")],
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCssChunks.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              includePaths: config.scssIncludes,
            },
          },
        ],
        include: [path.resolve(config.srcDir, "styles")],
      },
      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
        },
      },
      // Files
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
        loader: "file-loader",
        options: {
          name: "static/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    hot: false,
    contentBase: config.distDir,
    compress: true,
    historyApiFallback: {
      index: "/",
    },
    host: "0.0.0.0",
    port: process.env.PORT,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      REGION: "us-east-1",
      URL: "https://4g1cp1q8e3.execute-api.us-east-1.amazonaws.com/test/sample",

      USER_POOL_ID: "us-east-1_62W6LduaZ",
      APP_CLIENT_ID: "13vb6b9o56cuugspcdblmiq676",
      IDENTITY_POOL_ID: "us-east-1:7e7e2800-a6ef-4fec-a125-fd2a6e31b08a",
    }),
  },
};
