const path = require('path');
const createElectronReloadWebpackPlugin = require('electron-reload-webpack-plugin');
 
// Create one plugin for both renderer and main process
const ElectronReloadWebpackPlugin = createElectronReloadWebpackPlugin({
    // Path to `package.json` file with main field set to main process file path, or just main process file path
    path: path.join(__dirname, './dist/main/index.js'),
    // or just `path: './'`,
    // Other 'electron-connect' options
    logLevel: 0
});

var nodeExternals = require('webpack-node-externals');

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
    plugins: [ElectronReloadWebpackPlugin()],
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
