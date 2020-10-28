import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeCity } from "redux/bus/city/actions";

import { Row, Col, Image, Statistic } from "antd";
import { CloseIcon } from "components";

import { City } from "sharedTypes";

import "./CityPreviewItem.styles.scss";

type PropTypes = {
  city: City;
};

const CityPreviewItem: FC<PropTypes> = ({ city }): ReactElement => {
  const dispatch = useDispatch();

  const closeCityHandler = () => {
    dispatch(removeCity(city.city));
  };

  return (
    <div className="city-priview-item">
      <div className="city-priview-item__header">
        <h3>{city.city}</h3>
        <CloseIcon onClick={closeCityHandler} />
      </div>
      <Row
        align="middle"
        justify="center"
        className="city-priview-item__content"
      >
        <Col span={3}>
          <Image
            width={40}
            src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Temperature"
            value={`${city.temp}`}
            suffix="&#8451;"
          />
        </Col>
        <Col span={10}>
          <Statistic title="Description" value={city.description} />
        </Col>
        <Col span={3}>
          <Link to={`/${city.city.toLowerCase()}`}>More info</Link>
        </Col>
      </Row>
    </div>
  );
};

export default CityPreviewItem;
