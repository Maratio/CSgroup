import { useAppDispatch } from "../hooks";
import useStatesForm from "../hooks/useStatesForm";
import ITask from "../models/ITask";
import { handleClear, handleSubmitEdit } from "../utils/handlers";
import MyButton from "./UI/Button/MyButton";
import Form from "./UI/Form/Form";

interface Props {
  setModal: (newModal: boolean) => void;
  task: ITask;
}

const FormEdit = ({ setModal, task }: Props) => {
  const statesForm = useStatesForm(task.title, task.description, task.priority);
  const dispatch = useAppDispatch();
  
  return (
    <>
      <Form {...statesForm} />
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
