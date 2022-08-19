const path = require('path');
module.exports = (env) => ({
  mode: "production",
  entry: {
    app: "./src/index.ts"
  },
  output: {
    library: "VEditor",
    libraryExport: "default",
    libraryTarget: "umd",
    filename: env.browser ? "VEditor.browser.js" : "VEditor.js"
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.join(__dirname, './src/'),
    },
  },
  externals: env.browser ? {} : {
    dagre: "dagre",
    glMatrix: 'gl-matrix',
    canvg: "canvg",
    uuid: "uuid",
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js|ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader"
        }
      },

      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader"
      }
    ]
  },

});
