import {
  GeolocationState,
  GeolocationActionTypes,
  SET_GEOLOCATION,
  SET_CITY_WEATHER,
  REMOVE_CITY,
  SET_GEO_ENABLED,
  SET_LOADING,
  SET_ERROR,
} from "./types";

const initialState: GeolocationState = {
  currentGeolocation: null,
  cityList: [],
  geolocationEnabled: true,
  loading: false,
  error: null,
};

export const cityReducer = (
  state = initialState,
  action: GeolocationActionTypes
): GeolocationState => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        currentGeolocation: action.payload,
      };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_CITY_WEATHER:
      const cityIndex = state.cityList.findIndex(
        (city) => city.city === action.payload.city
      );
      if (cityIndex < 0)
        return { ...state, cityList: [action.payload, ...state.cityList] };
      else {
        const newCityList = [...state.cityList];
        newCityList.splice(cityIndex, 1);
        newCityList.unshift(action.payload);
        return { ...state, cityList: newCityList };
      }

    case SET_GEO_ENABLED:
      return { ...state, geolocationEnabled: action.payload };

    case REMOVE_CITY:
      const newCitiesArr = state.cityList.filter(
        (city) => city.city !== action.payload
      );
      return { ...state, cityList: newCitiesArr };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
