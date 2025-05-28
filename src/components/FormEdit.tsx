import React from "react";
import { useDispatch } from "react-redux";
import useStatesForm from "../hooks/useStatesForm";
import ITask from '../models/ITask';
import { editTask } from "../store/reducers/tasksSlice";
import Form from "./UI/Form/Form";
import MyButton from "./UI/Button/MyButton";



interface Props {
  setModal: (newModal: boolean ) => void;
  task: ITask
}

const FormEdit = ({setModal, task}: Props) => {
  const statesForm = useStatesForm(task.title, task.description, task.priority);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.MouseEvent) => {
     const title = statesForm.title
     const description = statesForm.description
     const priority = statesForm.priority
      dispatch(editTask({...task,title, description, priority}));
      setModal(false)
      
    };

    const handleClear = (event: React.MouseEvent) => {
      event.preventDefault();
      statesForm.setTitle('')
      statesForm.setDescription('')
      statesForm.setPriority('')
    };
  return (
        <>
        <Form {...statesForm}/>
          <div>
          <MyButton style={{ marginTop: 10 }} onClick={handleSubmit}>
              {"Cохранить"}
          </MyButton>
          <MyButton style={{ marginTop: 10, marginLeft: 20 }} onClick={handleClear}>
              {"Отчистить"}
          </MyButton>
          </div>
        </>
  );
};

export default FormEdit;
