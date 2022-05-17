const path = require('path');
module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.ts"
  },
  output: {
    library: "VEditor",
    libraryTarget: "umd",
    filename: "VEditor.js"
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.join(__dirname, './src/'),
    },
  },
  externals: {
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

};
