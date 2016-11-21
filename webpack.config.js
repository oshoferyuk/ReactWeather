var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugings:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output:{
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      'Navigation': __dirname + '/app/components/Nav.jsx',
      'Weather': __dirname + '/app/components/Weather.jsx',
      'WeatherForm': __dirname + '/app/components/weather/WeatherForm.jsx',
      'WeatherMessage': __dirname + '/app/components/weather/WeatherMessage.jsx',
      'About': __dirname + '/app/components/About.jsx',
      'Examples': __dirname + '/app/components/Examples.jsx',
      'openweathermap': __dirname + '/app/api/openWeatherMap.jsx'

    },
    extensions: ['','.js', '.jsx']
  },

  devtool: "#inline-source-map",


  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
