const path = require('path');

module.exports = {
  // ... other webpack config ...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/lucide-react/,
        ],
      },
      // ... other rules ...
    ],
  },
  ignoreWarnings: [
    {
      module: /node_modules\/lucide-react/,
    },
  ],
}; 