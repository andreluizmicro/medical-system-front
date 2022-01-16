import React from "react";
import { Table, Tag, Space, Row, Col, Button, Alert } from "antd";
import Spinner from "../../components/spinner/Spinner";
import { api } from "../../services/apit";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import "../../repositories/patients/PatientsRepository";

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text: any) => <a href="/">{text}</a>,
  },
  {
    title: "Idade",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Endereço",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "tag",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Ações",
    key: "action",
    render: (text: string, record: any) => (
      <Space size="middle">
        <a href="/#">Invite {record.name}</a>
        <a href="/#">Delete</a>
      </Space>
    ),
  },
];

const PatientList = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    api
      .get("/patients")
      .then((res) => {
        setLoading(true);
        setData(res.data.patients);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        console.log("HEREEEE!!!");
        setLoading(false);
      });
  }, []);

  if (error !== null) return <Alert message={error} type="error" showIcon />; //closable
  if (loading || data.length === 0) return <Spinner size="large" />;

  return (
    <>
      <CustomModal />
      <Row>
        <Col span={12}>
          <h1>Listagem de pacientes</h1>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={() => navigate("/patients/create")}>
            Novo paciente
          </Button>
        </Col>
      </Row>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default PatientList;
