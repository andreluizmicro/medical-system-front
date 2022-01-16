import React from "react";
import { Spin } from "antd";
import { Route, Routes } from "react-router-dom";

import routes from "../routes";

const AppContent = () => {
  console.log(routes);

  return (
    <React.Suspense fallback={<Spin size="large" />}>
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
