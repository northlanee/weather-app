import { combineReducers } from "redux";

import { cityReducer as city } from "redux/bus/city/reducer";
import { weatherReducer as weather } from "redux/bus/weather/reducer";

export const rootReducer = combineReducers({ city, weather });

export type AppState = ReturnType<typeof rootReducer>;
