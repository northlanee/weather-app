import { Geolocation, City } from "sharedTypes";

export type GeolocationState = {
  currentGeolocation: Geolocation;
  cityList: City[];
  geolocationEnabled: boolean;
  loading: boolean;
  error: null | string;
};

export const SET_GEOLOCATION = "@CITY/SET_GEOLOCATION";
type SetGeolocation = {
  type: typeof SET_GEOLOCATION;
  payload: Geolocation;
};

export const SET_CITY_WEATHER = "@CITY/SET_CITY_WEATHER";
type SetCityWeather = {
  type: typeof SET_CITY_WEATHER;
  payload: City;
};

export const REMOVE_CITY = "@CITY/REMOVE_CITY";
type RemoveCity = {
  type: typeof REMOVE_CITY;
  payload: string;
};

export const SET_GEO_ENABLED = "@CITY/SET_GEO_ENABLED";
type SetGeoEnabled = {
  type: typeof SET_GEO_ENABLED;
  payload: boolean;
};

export const SET_LOADING = "@CITY/SET_LOADING";
type SetLoading = {
  type: typeof SET_LOADING;
  payload: boolean;
};

export const SET_ERROR = "@CITY/SET_ERROR";
type SetError = {
  type: typeof SET_ERROR;
  payload: null | string;
};

export type GeolocationActionTypes =
  | SetGeolocation
  | SetCityWeather
  | SetLoading
  | SetError
  | RemoveCity
  | SetGeoEnabled;
