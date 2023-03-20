import "./WeatherResult.css";

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

const WeatherResult = (props) => {
  const location = props.weather.location;
  const dateTime = new Date(location.localtime);
  const weather = props.weather.current;
  return (
    <div className="weather-result">
      {/* {JSON.stringify(props.weather) } */}
      <div>
        <h2>
          {location.name}, {location.region}
        </h2>
        <p>{dateTime.toLocaleString("en-AU", options)}</p>
      </div>
      <ul className="weather-info">
        <li>
            <img src={weather.condition.icon} alt="weather condition icon" />
            <p>{weather.condition.text}</p>
        </li>
        <li>
            <p>Temp: {weather.temp_c} °C</p>
            <p>Wind: {weather.wind_kph} km/h</p>
            <p>Air quality:</p>
            <p>PM10: {Math.round(weather.air_quality.pm10)}, CO: {Math.round(weather.air_quality.co)}</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherResult;
