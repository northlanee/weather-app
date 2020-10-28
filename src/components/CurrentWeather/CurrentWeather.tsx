import React, { FC, ReactElement } from "react";
import { Descriptions, Image } from "antd";
import { City } from "sharedTypes";

import { dateHelper } from "utils/dateHelper";

import "./CurentWeather.styles.scss";

type PropTypes = {
  city: City;
};

const CurrentWeather: FC<PropTypes> = ({ city }): ReactElement => {
  return (
    <div className="current-weather">
      <div className="current-weather__header">
        <h3>{city.city} - Current Weather</h3>
      </div>
      <div className="current-weather__content">
        <Image
          width={40}
          src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
          className="current-weather__icon"
        />
        <Descriptions className="current-weather__info">
          <Descriptions.Item label="Description">
            {city.description}
          </Descriptions.Item>
          <Descriptions.Item label="Temperature">
            {city.temp} &#8451;
          </Descriptions.Item>
          <Descriptions.Item label="Pressure">
            {city.pressure} mm
          </Descriptions.Item>
          <Descriptions.Item label="Humidity">
            {city.humidity}%
          </Descriptions.Item>
          <Descriptions.Item label="Sunrise">
            {dateHelper.getTime(city.sunrise)}
          </Descriptions.Item>
          <Descriptions.Item label="Sunset">
            {dateHelper.getTime(city.sunset)}
          </Descriptions.Item>
          <Descriptions.Item label="Wind speed">
            {city.windSpeed} m/s
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default CurrentWeather;
