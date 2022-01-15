import React from "react";
import { Menu } from "antd";

import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const AppMenu = () => {
  const [mode, setMode] = React.useState("inline");
  const [theme, setTheme] = React.useState("light");
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
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Pacientes">
        <Menu.Item key="3">Marcar consulta</Menu.Item>
        <Menu.Item key="4">Exames</Menu.Item>
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
