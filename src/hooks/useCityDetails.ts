import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCurrentWeather,
  fetchForecastWeather,
} from "redux/bus/weather/actions";
import { weather } from "redux/bus/selectors";

type ParamTypes = {
  cityName: string;
};

export const useCityDetails = () => {
  const { cityName } = useParams<ParamTypes>();
  const dispatch = useDispatch();

  const city = useSelector(weather.city);
  const loading = useSelector(weather.loading);

  React.useEffect(() => {
    dispatch(fetchCurrentWeather(cityName));
  }, [dispatch, cityName]);

  React.useEffect(() => {
    if (city) {
      dispatch(fetchForecastWeather(city.lat, city.lon));
    }
  }, [dispatch, city]);

  return { city, loading };
};
