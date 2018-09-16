import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemaps';


class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderList)}
        </tbody>
      </table>
    );
  }
  renderList(cityData) {
    if (cityData === undefined) return;
    const cityName = cityData.city.name + ' , US';
    const temps = cityData.list.map(temp => temp.main.temp);
    const press = cityData.list.map(pressed => pressed.main.pressure);
    const hum = cityData.list.map(humid => humid.main.humidity);
    const {lon, lat} = cityData.city.coord;
    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color='red'/>
        </td>
        <td>
          <Chart data={press} color='yellow'/>
        </td>
        <td>
          <Chart data={hum} color='green'/>
        </td>
      </tr>
    );
}
}

function getProps({weather}) {
  return { weather };

}
export default connect(getProps)(WeatherList);
