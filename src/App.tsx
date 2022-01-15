import React from "react";
import { Layout } from "antd";
import styles from "./styles/globals.module.css";
import { Content, Footer } from "antd/lib/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.module.css";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/pages/login/Login";
import AppHeader from "./components/header/AppHeader";
import AppMenu from "./components/Menu/AppMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <AppHeader />
      <Layout>
        <Content style={{ height: "90vh", display: "flex" }}>
          <AppMenu />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </Content>
      </Layout>
      <Footer className={styles.footer}>Sistema médico versão 1.0.0</Footer>
    </BrowserRouter>
  );
};

export default App;
