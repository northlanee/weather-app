import React, { FC, ReactElement } from "react";

import { Forecast } from "sharedTypes";
import { dateHelper } from "utils/dateHelper";
import { Statistic, Row, Col } from "antd";

type PropTypes = {
  forecast: Forecast;
};

const DayWeather: FC<PropTypes> = ({ forecast }): ReactElement => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Statistic title="Date" value={dateHelper.getDate(forecast.day)} />
        </Col>
        <Col span={8}>
          <Statistic title="Description" value={forecast.description} />
        </Col>
        <Col span={8}>
          <Statistic title="Temperature" value={`${forecast.temp} ℃`} />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Statistic title="Pressure" value={`${forecast.pressure} mm`} />
        </Col>
        <Col span={8}>
          <Statistic title="Humidity" value={`${forecast.humidity}%`} />
        </Col>
        <Col span={8}>
          <Statistic title="Wind Speed" value={`${forecast.windSpeed} m/s`} />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Statistic
            title="Sunrise"
            value={dateHelper.getTime(forecast.sunrise)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Sunset"
            value={dateHelper.getTime(forecast.sunset)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DayWeather;
