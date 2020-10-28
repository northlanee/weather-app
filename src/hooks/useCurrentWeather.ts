import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { city } from "redux/bus/selectors";
import { fetchCurrentWeatherByGeo } from "redux/bus/city/actions";

export const useCurrentWeather = () => {
  const dispatch = useDispatch();
  const currentGeolocation = useSelector(city.currentGeolocation);
  const cityList = useSelector(city.getCityList);
  const loading = useSelector(city.loading);
  React.useEffect(() => {
    if (currentGeolocation) {
      dispatch(
        fetchCurrentWeatherByGeo(
          currentGeolocation.latitude,
          currentGeolocation.longitude
        )
      );
    }
  }, [currentGeolocation, dispatch]);

  return { cityList, loading };
};
