const HtmlWebpackPlugin = require("html-webpack-plugin");
const SriPlugin = require("webpack-subresource-integrity");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

module.exports = (env, argv) => ({
  mode: "production",
  performance: {
    hints: false
  },
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    crossOriginLoading: 'anonymous'
  },
  plugins: [
    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: true
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jquery',
          entry: {
            path: 'https://code.jquery.com/jquery-3.2.1.js',
            attributes: {
              integrity: 'sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=',
              crossorigin: 'anonymous',
            },
          },
          global: 'jQuery',
        },
      ],
    })
  ]
});
