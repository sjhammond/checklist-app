const path = require('path');
const nodeExternals = require('webpack-node-externals');

const common_config = {
  node: {
    __dirname: true
  },
  externals: [nodeExternals()],
  mode: process.env.ENV || 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
};

module.exports = [
  Object.assign({}, common_config, {
    target: 'electron-main',
    entry: {
      index: './src/main/index.ts',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/main')
    }
  }),
  Object.assign({}, common_config, {
    target: 'electron-renderer',
    entry: {
      'deployment-list': './src/renderer/deployment-list.ts',
      'checklist': './src/renderer/checklist.ts',
      'create-deployment': './src/renderer/create-deployment.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/renderer')
    }
  })
]
