import {
  WeatherState,
  WeatherActionTypes,
  SET_CITY,
  SET_FORECAST,
  SET_LOADING,
  SET_FORECAST_LOADING,
} from "./types";

const initialState: WeatherState = {
  city: null,
  forecast: null,
  loading: false,
  forecastLoading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload };

    case SET_FORECAST:
      return { ...state, forecast: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_FORECAST_LOADING:
      return { ...state, forecastLoading: action.payload };

    default:
      return state;
  }
};
