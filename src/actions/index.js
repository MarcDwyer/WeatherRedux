import axios from 'axios';

const API_KEY = '8d4e655d0ffb183d51ae1fcd1ab4ce9b';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(rootUrl);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
