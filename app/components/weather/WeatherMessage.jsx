var React = require('react');

var WeatherMessage = (props) =>{
  var location = props.location;
  var temp = props.temp;

return(
    <h3>Info {location} has temperature of {temp}</h3>
  );
}


module.exports = WeatherMessage;
