import React, { FC, ReactElement } from "react";

import "./Layout.styles.scss";

const Layout: FC = ({ children }): ReactElement => {
  return <div className="layout">{children}</div>;
};

export default Layout;
