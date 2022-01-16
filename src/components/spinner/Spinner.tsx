import React from "react";
import { Spin } from "antd";
import styles from "../../styles/spinner/spinner.module.css";

const Spinner = (props: any) => {
  return (
    <div className={styles.spinner}>
      <Spin size={props.size} />
    </div>
  );
};

export default Spinner;
