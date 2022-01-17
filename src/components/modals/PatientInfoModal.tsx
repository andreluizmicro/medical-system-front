import React from "react";
import { Modal, Tag } from "antd";

interface CustomModalProps {
  title: string;
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  data: any;
}

const CustomModal = ({
  data,
  title,
  visible = false,
  onOk = () => {},
  onCancel = () => {},
}: CustomModalProps) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
      <h2>
        {data.name} - {data.age} anos{" "}
        {data.age >= 65 && <Tag color="magenta">Preferencial</Tag>}
      </h2>

      <p>
        <b>Telefone: </b>
        {data.phone}
      </p>
      <p>
        <b>E-mail: </b>
        {data.email}
      </p>
      <p>
        <b>Endereço: </b>
        {data.address}
      </p>
      <p>
        <b>Número: </b>
        {data.number}
      </p>
      <p>
        <b>Bairro: </b>
        {data.neighborhood}
      </p>
      <p>
        <b>Cidade: </b>
        {data.city}
      </p>
      <p>
        <b>Estado: </b>
        {data.state}
      </p>
    </Modal>
  );
};

export default CustomModal;
