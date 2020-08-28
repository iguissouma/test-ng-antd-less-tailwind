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
          ]
        }
      }
    ]
  }
};
