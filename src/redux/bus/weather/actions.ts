import {
  WeatherActionTypes,
  SET_CITY,
  SET_FORECAST,
  SET_LOADING,
  SET_FORECAST_LOADING,
} from "./types";
import { City, Forecast } from "sharedTypes";
import { ThunkAction } from "redux-thunk";
import { AppState } from "redux/init/rootReducer";
import { Action } from "redux";
import { api } from "api";
import { createWeatherObject, createForecastObject } from "../../helpers";

export const setCity = (payload: City): WeatherActionTypes => ({
  type: SET_CITY,
  payload,
});

export const setForecast = (payload: Forecast[]) => ({
  type: SET_FORECAST,
  payload,
});

export const setLoading = (payload: boolean): WeatherActionTypes => ({
  type: SET_LOADING,
  payload,
});

export const setForecastLoading = (payload: boolean): WeatherActionTypes => ({
  type: SET_FORECAST_LOADING,
  payload,
});

export const fetchCurrentWeather = (
  city: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const weather = await api.getCurrentWeather.byCity(city);
    if (!weather) throw new Error(weather);
    const currentWeather: City = createWeatherObject(weather);
    dispatch(setCity(currentWeather));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err.message);
    dispatch(setLoading(false));
  }
};

export const fetchForecastWeather = (
  lat: number,
  lon: number
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch(setForecastLoading(true));
    const weather = await api.getForecastWeather.byCoordinates(lat, lon);
    if (!weather) throw new Error(weather);
    const forecast = weather.daily
      .filter((_: any, idx: number) => idx !== 0)
      .map(
        (daily: any): Forecast => {
          return createForecastObject(daily);
        }
      );
    console.log(forecast);
    dispatch(setForecast(forecast));
    dispatch(setForecastLoading(false));
  } catch (err) {
    console.log(err.message);
    dispatch(setForecast([]));
    dispatch(setForecastLoading(false));
  }
};
