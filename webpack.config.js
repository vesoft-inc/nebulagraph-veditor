const devMode = process.env.SYS_ENV !== "production";
const path = require('path')
module.exports = {
  cache: true,
  entry: {
    app: "./demo/app.js"
  },
  output: {
    filename: "index.js"
  },
  mode: 'development',
  devServer: {
    host: "0.0.0.0",
    port: "7798",
    static: [{
      staticOptions: {
        publicPath: '/',
        serveIndex: true,
      },
    }, {
      directory: path.join(__dirname, 'dist'),
    }],
    watchFiles: ['src/**/*', 'demo/**/*'],
    open: "./index.html",
    hot: true
  },
  devtool: "source-map",
  module: {

    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules|dist/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css$/,
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
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
  resolve: {
    extensions: ['.ts', '.js', '.json', '.less', '.svg', '.css',],
    alias: {
      '@': path.join(__dirname, './src/'),
    },
  },
};
