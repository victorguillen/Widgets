import React, { Component } from 'react';
import './App.css';

const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join("&");
};


class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }
    url += toQueryString(params);
    const apiKey = '05615e5b263945ee84eddadb1220158f';
    url += `&APPID=${apiKey}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }


  render() {
    let content = <div></div>;

    if(this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} F</p>
                </div>;
    } else {
      content = <div className='loading'>
                <p>loading weather...</p>
                </div>;
    }
    return (
      <div className="box">
        <div className='weather'>
          <h1>Weather</h1>
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;
