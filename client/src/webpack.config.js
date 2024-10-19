const path = require('path');

module.exports = {
  // ... outras configurações do webpack
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/")
    }
  },
  // Outras configurações, como entrada, saída, regras de carregadores (loaders), etc.
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Adicione outras regras conforme necessário
    ]
  },
  entry: './src/index.js', // ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js', // nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // diretório de saída
  },
  devtool: 'source-map', // para facilitar a depuração
  // Outras configurações do webpack
};
