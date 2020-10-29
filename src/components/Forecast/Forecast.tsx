import React, { FC, ReactElement } from "react";

import { useSelector } from "react-redux";

import { Tabs } from "antd";

import { weather } from "redux/bus/selectors";
import { dateHelper } from "utils/dateHelper";
import { CSSTransition } from "react-transition-group";

import DayWeather from "./DayWeather/DayWeather";
import { Spinner } from "components";

import "./Forecast.styles.scss";

const { TabPane } = Tabs;

const Forecast: FC = (): ReactElement => {
  const forecast = useSelector(weather.forecast);
  const loading = useSelector(weather.forecastLoading);

  const forecastJSX =
    forecast &&
    forecast.map((f) => {
      return (
        <TabPane key={f.day} tab={dateHelper.getDayName(f.day)}>
          <DayWeather forecast={f} />
        </TabPane>
      );
    });

  if (forecastJSX)
    return (
      <CSSTransition
        in={true}
        timeout={1000}
        classNames="forecast__transition"
        unmountOnExit
        appear
      >
        <div className="forecast">
          <h3 className="forecast__header">Week Forecast</h3>
          <Tabs className="forecast__tabs">{forecastJSX}</Tabs>
        </div>
      </CSSTransition>
    );

  if (loading) return <Spinner />;
  return <div>not found</div>;
};

export default Forecast;
