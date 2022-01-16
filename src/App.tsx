import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.module.css";
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./views/pages/login/Login";
import Spinner from "./components/spinner/Spinner";

const App = () => {
  const isLogged = React.useState(() => {
    const token = localStorage.getItem("token");
    return token;
  });

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner size="large" />}>
        {isLogged[0] === "" ? <Login /> : <DefaultLayout />}
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
