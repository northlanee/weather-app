import { AppState } from "redux/init/rootReducer";

export const city = {
  currentGeolocation: (state: AppState) => state.city.currentGeolocation,
  getCityList: (state: AppState) => state.city.cityList,
  loading: (state: AppState) => state.city.loading,
  error: (state: AppState) => state.city.error,
};

export const weather = {
  city: (state: AppState) => state.weather.city,
  loading: (state: AppState) => state.weather.loading,
  forecast: (state: AppState) => state.weather.forecast,
  forecastLoading: (state: AppState) => state.weather.forecastLoading,
};
