import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import styles from "./style.module.css";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    navigate("/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col span={24}>
          <img src={logo} alt="Logo Medical System" className={styles.logo} />
          <h2>Bem vindo ao Medical System</h2>
          <br />
          <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: "Informe o e-mail de acesso" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[{ required: true, message: "Informe uma senha válida" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 2, span: 21 }}
            >
              <Checkbox>Lembrar senha</Checkbox>
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "200px", marginLeft: "40px" }}
            >
              Logar
            </Button>

            <Form.Item wrapperCol={{ offset: 8, span: 1 }}></Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
