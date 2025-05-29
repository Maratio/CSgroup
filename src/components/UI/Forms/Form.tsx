import React, { useContext } from "react";
import {
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledSelected,
} from "../../../styles/styles";
import { FormFieldsContext } from "../../../context/FormFieldsProvider";

const Form = () => {
  const statesForm = useContext(FormFieldsContext);

  if (!statesForm) {
    throw new Error("FormFieldsContext is not provided");
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <StyledLabel>Название задачи</StyledLabel>
        <StyledInput
          placeholder="название задачи"
          type="text"
          value={statesForm.title}
          onChange={(event) => statesForm.setTitle(event.target.value)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Описание задачи</StyledLabel>
        <StyledInput
          placeholder="описание задачи"
          type="text"
          value={statesForm.description}
          onChange={(event) => statesForm.setDescription(event.target.value)}
        />
      </StyledInputContainer>
      <StyledLabel>Приоритет</StyledLabel>
      <StyledSelected
        value={statesForm.priority}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          statesForm.setPriority(event.target.value)
        }
        defaultValue={"Задайте приоритет"}
        options={[
          { value: "низкий", name: "низкий" },
          { value: "средний", name: "средний" },
          { value: "высокий", name: "высокий" },
        ]}
      />
    </StyledForm>
  );
};

export default Form;
