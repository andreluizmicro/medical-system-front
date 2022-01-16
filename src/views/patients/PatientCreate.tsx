import React from "react";
import { useNavigate } from "react-router-dom";
import "../../repositories/patients/PatientsRepository.ts";
import { api } from "../../services/apit";

const PatientCreate = () => {
  const navigate = useNavigate();

  const data = {
    name: "Marcos Paulo da Silva",
    age: 67,
    address: "Rua do Carinha que mora logo ali",
    tags: ["PHP", "Java"],
  };

  function handleClick() {
    api.post("/patients", data);
    navigate("/patients");
  }

  return (
    <div>
      <h1>Cadastro de paciente</h1>
      <button onClick={handleClick}>Cadastrar novo</button>
    </div>
  );
};

export default PatientCreate;
