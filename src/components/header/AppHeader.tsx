import React from "react";
import { Header } from "antd/lib/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import styles from "../../styles/globals.module.css";
import {
  Col,
  Popconfirm,
  Row,
  message,
  Menu,
  Dropdown,
  Avatar,
  Image,
  Tooltip,
  Button,
} from "antd";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const text = <span>Usuário: André Luiz</span>;

  const buttonWidth = 70;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  function confirm(e: any) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e: any) {
    console.log(e);
    message.error("Click on No");
  }

  return (
    <Header className={styles.header}>
      <Row className={styles.row}>
        <Col span={12}>
          <Link to="/">
            <img src={logo} alt="logo Medical System" className={styles.logo} />
            <span className={styles.logoName}>MedicalSystem</span>
          </Link>
        </Col>
        <Col
          span={12}
          // style={{ border: "1px solid black" }}
          className={styles.headerInfo}
        >
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            className={styles.dropdown}
          >
            <Link
              to=""
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {/* <Avatar icon={<UserOutlined />} /> */}

              <Tooltip placement="bottom" title={text}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
              </Tooltip>
            </Link>
          </Dropdown>

          <Popconfirm
            title="Tem certeza que deseja sair?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Sim"
            cancelText="Não"
          >
            <Link to="/logou" className={styles.headerUserInfo}>
              Sair
            </Link>
          </Popconfirm>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
