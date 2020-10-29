import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { CurrentWeather, Forecast, Spinner } from "components";
import { Breadcrumb, Empty } from "antd";
import emptyImg from "assets/images/empty.png";

import { useCityDetails } from "hooks/useCityDetails";

const CityDetails: FC = (): ReactElement => {
  const { city, loading } = useCityDetails();

  const cityJSX = city ? (
    <>
      <CurrentWeather city={city} />
      <Forecast />
    </>
  ) : (
    <Empty description="City not found" image={emptyImg} />
  );

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">&#8592; Home</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      {cityJSX}
    </div>
  );
};

export default CityDetails;
