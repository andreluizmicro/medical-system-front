import React from "react";
import { useNavigate } from "react-router-dom";
import "../../repositories/patients/PatientsRepository.ts";
import { api } from "../../services/apit";

const PatientCreate = () => {
  const navigate = useNavigate();

  const data = {
    id: 2,
    key: "2",
    name: "Marcos Paulo da Silva",
    age: 67,
    phone: "(35) 9984587950",
    email: "marcospaulo@gmail.com",
    address: "Rua do Carinha que mora logo ali",
    neighborhood: "Jarim das Colinas",
    number: 1075,
    city: "Maria da Fé",
    state: "MG",
    tags: ["Python", "React"],
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
