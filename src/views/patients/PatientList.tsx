import React from "react";
import { Table, Tag, Row, Col, Button, Alert, Tooltip } from "antd";
import styles from "../../styles/patients/patient.module.css";
import Spinner from "../../components/spinner/Spinner";
import { api } from "../../services/apit";
import { useNavigate } from "react-router-dom";
import PatientInfoModal from "../../components/modals/PatientInfoModal";
import "../../repositories/patients/PatientsRepository";

const PatientList = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [inforUser, setInfoUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [modal, setModal] = React.useState<boolean>(false);

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <span
          onClick={() => {
            setInfoUser(record);
            setModal(true);
          }}
          style={{ color: "#41a1ff", cursor: "pointer" }}
        >
          {text}
        </span>
      ),
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
        <div className={styles.menuActions}>
          <Tooltip placement="bottom" title="Editar paciente">
            <Button
              onClick={() => navigate(`/patient/${record.id}`)}
              type="primary"
              className={styles.actionButtons}
            >
              Editar
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Excluir paciente">
            <Button type="primary" danger>
              Excluir
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

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
        setLoading(false);
      });
  }, []);

  if (error !== null) return <Alert message={error} type="error" showIcon />; //closable
  if (loading || data.length === 0) return <Spinner size="large" />;

  return (
    <>
      <PatientInfoModal
        data={inforUser}
        title="Informações do usuário"
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      />
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
