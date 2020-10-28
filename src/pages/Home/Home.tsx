import React, { FC, ReactElement } from "react";

import { GeolocationForm, CityPreview } from "components";

const Home: FC = (): ReactElement => {
  return (
    <div>
      <GeolocationForm />
      <CityPreview />
    </div>
  );
};

export default Home;
