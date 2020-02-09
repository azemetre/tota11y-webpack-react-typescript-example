const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = [
  {
    mode: 'development',
    name: 'tota11y-react-ts',
    devtool: 'source-map',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      publicPath: '/dist/client/',
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.tsx', '.jsx', '.js'],
      alias: {
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        '@src': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components')
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: [/node_modules/,]
        },
      ],
    },
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ManifestPlugin({ fileName: '../manifest.json' }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: '../index.html'
      }),
      new AddAssetHtmlPlugin({ filepath: require.resolve('./node_modules/@khanacademy/tota11y/dist/tota11y.min.js') }),
    ],
    stats: 'minimal',
  },
];
