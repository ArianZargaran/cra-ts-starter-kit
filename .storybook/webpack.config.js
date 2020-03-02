const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-typescript"),
            [
              require.resolve("babel-preset-react-app/dependencies"),
              { helpers: true }
            ]
          ],
        }
      },
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  config.resolve.modules.push(path.resolve(__dirname, '../src'));
  config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");
  return config;
};
