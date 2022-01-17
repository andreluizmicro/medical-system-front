import { Alert } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { api } from "../../services/apit";

const Patient = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    api
      .get(`/patient/${id}`)
      .then((res) => {
        setLoading(true);
        setData(res.data.patient);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (error !== null) return <Alert message={error} type="error" showIcon />;
  if (loading || data.length === 0) return <Spinner size="large" />;

  return (
    <div>
      <h1>Formuláio de edição - {data.name}</h1>
    </div>
  );
};

export default Patient;
