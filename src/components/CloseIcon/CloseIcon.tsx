import React, { FC, ReactElement } from "react";

import { CloseOutlined } from "@ant-design/icons";
import "./CloseIcon.styles.scss";

type PropTypes = {
  onClick: () => void;
};

const CloseIcon: FC<PropTypes> = ({ onClick }): ReactElement => {
  return (
    <div className="close-icon" onClick={onClick}>
      <CloseOutlined />
    </div>
  );
};

export default CloseIcon;
