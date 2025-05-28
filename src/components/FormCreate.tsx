import React from "react";
import { useDispatch } from "react-redux";
import useStatesForm from "../hooks/useStatesForm";
import { addTask } from "../store/reducers/tasksSlice";
import Form from "./UI/Form/Form";
import MyButton from "./UI/Button/MyButton";
import { useAppDispatch } from "../hooks";

interface Props {
  setModal: (newModal: boolean) => void;
}

const FormCreate = ({ setModal }: Props) => {
  const statesForm = useStatesForm("", "", "");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    const id = new Date().getTime();
    const createdAt = new Date();
    const title = statesForm.title;
    const description = statesForm.description;
    const priority = statesForm.priority;
    dispatch(addTask({ id, title, description, priority, createdAt }));
    setModal(false);
    statesForm.setTitle("");
    statesForm.setDescription("");
    statesForm.setPriority("");
  };
  const handleClear = (event: React.MouseEvent) => {
    event.preventDefault();
    statesForm.setTitle("");
    statesForm.setDescription("");
    statesForm.setPriority("");
  };
  return (
    <>
      <Form {...statesForm} />
      <div>
        <MyButton style={{ marginTop: 10 }} onClick={handleSubmit}>
          {"Cоздать"}
        </MyButton>
        <MyButton
          style={{ marginTop: 10, marginLeft: 20 }}
          onClick={handleClear}
        >
          {"Отчистить"}
        </MyButton>
      </div>
    </>
  );
};

export default FormCreate;
