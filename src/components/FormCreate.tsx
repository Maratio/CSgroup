import { useAppDispatch } from "../hooks";
import useStatesForm from "../hooks/useStatesForm";
import { handleClear, handleSubmitCreate } from "../utils/handlers";
import MyButton from "./UI/Button/MyButton";
import Form from "./UI/Form/Form";

interface Props {
  setModal: (newModal: boolean) => void;
}

const FormCreate = ({ setModal }: Props) => {
  const statesForm = useStatesForm("", "", "");
  const dispatch = useAppDispatch();

  return (
    <>
      <Form {...statesForm} />
      <div>
        <MyButton
          style={{ marginTop: 10 }}
          onClick={() => handleSubmitCreate(statesForm, setModal, dispatch)}
        >
          {"Cоздать"}
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

export default FormCreate;
