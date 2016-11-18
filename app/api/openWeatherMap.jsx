var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9fccb848daf99c27156bc16d3a3ebba5';
//9fccb848daf99c27156bc16d3a3ebba5
module.exports = {
    getTemp: function(location){

      var encoudedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoudedLocation}`;


      return axios.get(requestUrl).then(function response(res){
        return res.data.main.temp;
      }, function error(res){
        throw new Error(res.data.message);
      });
    }
}
