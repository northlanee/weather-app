import React from "react";
import { Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";

import { Layout } from "components";
import { Home, CityDetails } from "pages";

function App() {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:cityName" component={CityDetails} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
