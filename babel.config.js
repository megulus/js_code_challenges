// I didn't thhink I needed babel for this project, since I'm using node v 13+
// but adding it is what finally got my jest tests to run.

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};