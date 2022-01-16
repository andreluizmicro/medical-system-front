import React from "react";
import AppHeader from "../components/header/AppHeader";
import { Content, Footer } from "antd/lib/layout/layout";
import styles from "../styles/globals.module.css";
import AppContent from "../components/AppContent";
import AppMenu from "../components/Menu/AppMenu";
import { Layout } from "antd";

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Layout>
        <Content style={{ height: "90vh", display: "flex" }}>
          <AppMenu />
          <div className={styles.content}>
            <AppContent />
          </div>
        </Content>
      </Layout>
      <Footer className={styles.footer}>Sistema médico versão 1.0.0</Footer>
    </React.Fragment>
  );
};

export default DefaultLayout;
