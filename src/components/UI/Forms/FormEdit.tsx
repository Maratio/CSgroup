import { useContext } from "react";
import { useAppDispatch } from "../../../hooks";
import ITask from "../../../models/ITask";
import { handleClear, handleSubmitEdit } from "../../../utils/handlers";
import MyButton from "../Button/MyButton";
import Form from "./Form";
import { FormFieldsContext } from "../../../context/FormFieldsProvider";

interface Props {
  setModal: (newModal: boolean) => void;
  task: ITask;
}

const FormEdit = ({ setModal, task }: Props) => {
  const statesForm = useContext(FormFieldsContext);

  if (!statesForm) {
    throw new Error("FormFieldsContext is not provided");
  }
  const dispatch = useAppDispatch();

  return (
    <>
      <Form/>
      <div>
        <MyButton
          style={{ marginTop: 10 }}
          onClick={() => handleSubmitEdit(statesForm, setModal, dispatch, task)}
        >
          {"Cохранить"}
        </MyButton>
        <MyButton
          style={{ marginTop: 10, marginLeft: 20 }}
          onClick={() => handleClear(statesForm)}
        >
          {"Отчистить"}
        </MyButton>
      </div>
    </>
  );
};

export default FormEdit;
