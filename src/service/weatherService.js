const API_KEY = "d05c8aa947cb4d639e3123717223110";
const FETCH_CITY_WEATHER_URL = "http://api.weatherapi.com/v1/current.json";

const fetchWetherByCity = async (city, isChecked) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);

  url.searchParams.append("key", API_KEY);
  url.searchParams.append("q", city);
  url.searchParams.append("aqi", isChecked);

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default fetchWetherByCity;
