import { useContext } from "react";
import { FormFieldsContext } from "../../../context/FormFieldsProvider";
import { useAppDispatch } from "../../../hooks";
import { handleClear, handleSubmitCreate } from "../../../utils/handlers";
import MyButton from "../Button/MyButton";
import Form from "./Form";

interface Props {
  setModal: (newModal: boolean) => void;
}

const FormCreate = ({ setModal }: Props) => {
  const statesForm = useContext(FormFieldsContext);

  if (!statesForm) {
    throw new Error("FormFieldsContext is not provided");
  }
  const dispatch = useAppDispatch();

  return (
    <>
      <Form />
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
