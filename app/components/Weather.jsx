var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openweathermap = require('../api/openWeatherMap.jsx');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
debugger;

    var that = this;
this.setState({
  isLoading:true
});
    openweathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading: false
      });
    }, function(err){
      alert(err);
    });

    //this.setState({location:location,temp:23});
  },
  render: function(){
var {isLoading,temp,location} = this.state;

    function getMessage(){
      if(isLoading){
        return <h1>Fetching data...</h1>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {getMessage()}
      </div>
    );
  }
});

module.exports = Weather;
