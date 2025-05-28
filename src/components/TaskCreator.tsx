import { useState } from "react";
import Form from "./FormCreate";
import MyButton from "./UI/Button/MyButton";
import MyModal from "./UI/Modal/MyModal";

const TaskCreator = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Добавить задачу
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Form setModal={setModal}/>
      </MyModal>
    </>
  );
};

export default TaskCreator;