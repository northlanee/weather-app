import React, { FC, ReactElement } from "react";

import { Spinner } from "components";

import { useCurrentWeather } from "hooks/useCurrentWeather";
import { City } from "sharedTypes";
import CityPreviewItem from "./CityPreviewItem/CityPreviewItem";

import { Empty } from "antd";
import emptyImg from "assets/images/empty.png";

const CityPreview: FC = (): ReactElement => {
  const { cityList, loading } = useCurrentWeather();

  if (cityList.length === 0) {
    if (loading) return <Spinner />;
    else return <Empty description="No cities" image={emptyImg} />;
  }

  const citiesJSX = cityList.map((city: City) => {
    return <CityPreviewItem key={city.city} city={city} />;
  });

  return (
    <div>
      {loading ? <Spinner /> : null}
      {citiesJSX}
    </div>
  );
};

export default CityPreview;
