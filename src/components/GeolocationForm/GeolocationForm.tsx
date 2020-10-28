import React, { FC, ReactElement } from "react";

import { useGeolocationForm } from "hooks/useGeolocationForm";

import { Input, Button, Alert } from "antd";
import "./GeolocationForm.styles.scss";
const { Search } = Input;

const GeolocationForm: FC = (): ReactElement => {
  const {
    error,
    loading,
    cityInput,
    geolocationHandler,
    cityInputHandler,
    citySearchHandler,
  } = useGeolocationForm();

  return (
    <div className="geolocation_form">
      <div className="geolocation_form__inputs">
        <Search
          placeholder="Type city name"
          enterButton="Search"
          size="large"
          value={cityInput}
          loading={loading}
          onChange={cityInputHandler}
          onSearch={citySearchHandler}
          className="geolocation_form__search-bar"
        />
        <Button
          onClick={geolocationHandler}
          type="primary"
          size="large"
          className="geolocation_form__current-btn"
        >
          Get current location
        </Button>
      </div>

      {error && <Alert message={error} type="error" closable />}
    </div>
  );
};

export default GeolocationForm;
