import { City, Forecast } from "sharedTypes";

export type WeatherState = {
  city: City | null;
  forecast: Forecast[] | null;
  loading: boolean;
  forecastLoading: boolean;
  error: null | string;
};

export const SET_CITY = "@WEATHER/SET_CITY";
type SetCity = {
  type: typeof SET_CITY;
  payload: City;
};

export const SET_FORECAST = "@WEATHER/SET_FORECAST";
type SetForecast = {
  type: typeof SET_FORECAST;
  payload: Forecast[];
};

export const SET_LOADING = "@WEATHER/SET_LOADING";
type SetLoading = {
  type: typeof SET_LOADING;
  payload: boolean;
};

export const SET_FORECAST_LOADING = "@WEATHER/SET_FORECAST_LOADING";
type SetForecastLoading = {
  type: typeof SET_FORECAST_LOADING;
  payload: boolean;
};

export type WeatherActionTypes =
  | SetCity
  | SetLoading
  | SetForecast
  | SetForecastLoading;
