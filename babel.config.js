module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
        },
      },
    ],
  ],
};
