const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-less',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
            purgecss({
              content: ['./**/*.html', './**/*.ts', './**/*.less'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            }),
          ]
        }
      }
    ]
  }
};
