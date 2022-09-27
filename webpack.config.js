const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const fse = require('fs-extra');
const fs = require('fs');
const fetch = require('node-fetch');
const Dotenv = require('dotenv-webpack');
const externalContentConfig = require('./externalcontent.config.js');

const PACKAGE_PATHS = {
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@utility': path.resolve(__dirname, 'src/utility'),
    '@theme': path.resolve(__dirname, 'src/theme'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@common-components': path.resolve(__dirname, 'src/components/common'),
    '@layout-components': path.resolve(__dirname, 'src/components/layout'),
    '@page-components': path.resolve(__dirname, 'src/pages'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@redux': path.resolve(__dirname, 'src/redux'),
    modules: path.join(__dirname, 'node_modules'),
};

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', function () {
			try {
				fse.copySync('./src/assets/images', './dist/assets/images');
			} catch (err) {
				console.error(err);
			}
    });

    compiler.hooks.done.tap('Fetch content', function () {
			try {
				const { source: srcUrl, destination: destUrl, files } = externalContentConfig;

				fs.mkdirSync('./dist/assets/content', { recursive: true });

				files.forEach(({ filename }) => {
					fetch(srcUrl + filename)
						.then((response) => response.text())
						.then((textData) => fs.writeFileSync(destUrl + filename, textData))
						.catch((err) => console.error(`Erorr while saving file: ${filename}. ${err.message}`));
				});
			} catch (err) {
				console.error(err);
			}
    });
  }
}

let cssConfig = {
  test: /\.css|less$/i,
  use: ['css-loader', 'postcss-loader'],
};

let config = {
  resolve: {
    alias: PACKAGE_PATHS,
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
  },
  entry: './src/index.jsx',
  plugins: [
    new Dotenv(),
	],
  module: {
    rules: [
      cssConfig,
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader');

  config.devServer = {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'app'),
    },
		proxy: {
			'/api': {
		    target: 'http://localhost:8080',
		    secure: false,
		    changeOrigin: true,
				ws: true,
		  },
		},
    hot: true,
    port: 3000,
    host: '0.0.0.0',
    client: {
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  };

  config.mode = 'development';
  config.devtool = 'inline-source-map';
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true,
    })
  );
  config.plugins.push(new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    lintDirtyModulesOnly: false,
  }));
}

if (currentTask == 'build' || currentTask === 'develop-build') {
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  };
  config.mode = 'production';
  config.optimization = {
    splitChunks: { chunks: 'all' },
    minimizer: [
      new TerserPlugin(),
    ],
  };

  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
    new RunAfterCompile(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    })
  );

  if (currentTask === 'develop-build') {
    config.devtool = 'source-map';
    config.mode = 'development';
  }
}

module.exports = config;
