module.exports = {
  entry: './app/app.jsx',
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
