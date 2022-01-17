import React from "react";
import { Modal } from "antd";

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
      <h2>{data.name}</h2>
      <p>
        <b>Idade: </b>
        {data.age} anos
      </p>
      <p>
        <b>Endereço: </b>
        {data.address}
      </p>
    </Modal>
  );
};

export default CustomModal;
