import { City, Forecast } from "sharedTypes";

export const createWeatherObject = (weather: any): City => {
  return {
    city: weather.name,
    temp: weather.main.temp,
    pressure: weather.main.pressure,
    humidity: weather.main.humidity,
    windSpeed: weather.wind.speed,
    sunrise: weather.sys.sunrise,
    sunset: weather.sys.sunset,
    description: weather.weather[0].description,
    icon: weather.weather[0].icon,
    lat: weather.coord.lat,
    lon: weather.coord.lon,
  };
};

export const createForecastObject = (forecast: any): Forecast => {
  return {
    day: forecast.dt,
    temp: forecast.temp.day,
    pressure: forecast.pressure,
    humidity: forecast.humidity,
    windSpeed: forecast.wind_speed,
    sunrise: forecast.sunrise,
    sunset: forecast.sunset,
    description: forecast.weather[0].description,
    icon: forecast.weather.icon,
  };
};
