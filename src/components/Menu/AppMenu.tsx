import React from "react";
import { Menu } from "antd";

import {
  MailOutlined,
  CalendarOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const AppMenu = () => {
  const { SubMenu } = Menu;

  return (
    <Menu
      style={{ marginTop: "15px", width: 256, height: "84vh" }}
      defaultSelectedKeys={["1"]}
    >
      <Menu.Item key="1" icon={<MailOutlined />}>
        Enviar Email
      </Menu.Item>
      <Menu.Item key="2" icon={<CalendarOutlined />}>
        Calendário de consultas
      </Menu.Item>
      <SubMenu key="sub1" icon={<UsergroupAddOutlined />} title="Pacientes">
        <Menu.Item key="3">
          <Link to="/patients"> Lista de pacientes</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/patients/create"> Cadastrar paciente</Link>
        </Menu.Item>
        <SubMenu key="sub1-2" title="Relatórios">
          <Menu.Item key="5">Constultas</Menu.Item>
          <Menu.Item key="6">Pedidos</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Configurações">
        <Menu.Item key="7">Alterar senha</Menu.Item>
        <Menu.Item key="8">Sair</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default AppMenu;
