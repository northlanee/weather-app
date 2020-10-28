import {
  GeolocationActionTypes,
  SET_GEOLOCATION,
  SET_CITY_WEATHER,
  REMOVE_CITY,
  SET_LOADING,
  SET_ERROR,
} from "./types";
import { createWeatherObject } from "../../helpers";
import { Geolocation, City } from "sharedTypes";
import { ThunkAction } from "redux-thunk";
import { AppState } from "redux/init/rootReducer";
import { Action } from "redux";
import { api } from "api";

export const setGeolocation = (
  payload: Geolocation
): GeolocationActionTypes => ({
  type: SET_GEOLOCATION,
  payload,
});

export const setCityWeather = (payload: City): GeolocationActionTypes => ({
  type: SET_CITY_WEATHER,
  payload,
});

export const removeCity = (payload: string): GeolocationActionTypes => ({
  type: REMOVE_CITY,
  payload,
});

const setLoading = (payload: boolean): GeolocationActionTypes => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload: null | string): GeolocationActionTypes => ({
  type: SET_ERROR,
  payload,
});

export const fetchCurrentWeatherByGeo = (
  lat: number,
  lon: number
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const weather = await api.getCurrentWeather.byCoordinates(lat, lon);
    if (!weather) throw new Error(weather);
    const currentWeather: City = createWeatherObject(weather);
    console.log(weather);
    dispatch(setCityWeather(currentWeather));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(setLoading(false));
  }
};

export const fetchCurrentWeatherByCity = (
  city: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const weather = await api.getCurrentWeather.byCity(city);
    if (!weather) throw new Error(weather);
    const currentWeather: City = createWeatherObject(weather);
    dispatch(setCityWeather(currentWeather));
    dispatch(setLoading(false));
  } catch (err) {
    const errMessage =
      city === "" ? "Please, enter city name" : `City ${city} not found`;
    dispatch(setError(errMessage));
    dispatch(setLoading(false));
  }
};
