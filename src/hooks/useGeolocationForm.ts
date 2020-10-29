import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { city } from "redux/bus/selectors";

import {
  setGeolocation,
  fetchCurrentWeatherByCity,
  setError,
  setGeoEnabled,
} from "redux/bus/city/actions";

export const useGeolocationForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(city.loading);
  const error = useSelector(city.error);
  const geoEnabled = useSelector(city.geoEnabled);

  const [cityInput, setCityInput] = React.useState<string>("");

  const getCurrentGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        dispatch(
          setGeolocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          })
        ),
      () => {
        dispatch(setGeoEnabled(false));
        dispatch(setError("Geolocation disabled"));
      }
    );
  };

  const geolocationHandler = () => {
    getCurrentGeolocation();
  };

  const cityInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
  };

  const citySearchHandler = () => {
    setCityInput("");
    dispatch(fetchCurrentWeatherByCity(cityInput));
  };

  return {
    error,
    loading,
    cityInput,
    geoEnabled,
    geolocationHandler,
    cityInputHandler,
    citySearchHandler,
  };
};
