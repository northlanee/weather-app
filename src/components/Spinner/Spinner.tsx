import React, { FC, ReactElement } from "react";

import { Spin } from "antd";
import "./Spinner.styles.scss";

const Spinner: FC = (): ReactElement => {
  return (
    <div className="spinner">
      <Spin />
    </div>
  );
};

export default Spinner;
