import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.module.css";
import DefaultLayout from "./layout/DefaultLayout";
import { Spin } from "antd";
import Login from "./views/pages/login/Login";

const App = () => {
  const [isLogged, setIsLogged] = React.useState(true);
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spin size="large" />}>
        {!isLogged ? <Login /> : <DefaultLayout />}
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
