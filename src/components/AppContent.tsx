import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "../routes";
import Spinner from "./spinner/Spinner";

const AppContent = () => {
  return (
    <React.Suspense fallback={<Spinner size="large" />}>
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                element={<route.element />}
              ></Route>
            )
          );
        })}
      </Routes>
    </React.Suspense>
  );
};

export default AppContent;
