const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log(isDev)

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if (isDev === false) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

module.exports = {
  // Входной файл
  entry: ['./src/js/index.js'],

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },

  devtool: isDev ? 'source-map' : '', // Source maps для удобства отладки
  optimization: optimization(),

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          }
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически, по факту нужен, чтобы работать с HTML в сборке, к нему автоматически добавляются все стили и скрипты
    new HtmlWebpackPlugin({
      title: 'Service Page',
      template: './src/index.html', //путь к нашей странице
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: !isDev
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img'
      }
    ]),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.(?!eot|ttf|woff|woff2$)[a-z0-9][a-z0-9]*\.css$/gi
    })
  ]
}
