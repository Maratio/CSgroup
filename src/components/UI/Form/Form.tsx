import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledSelectContainer,
  StyledSelected,
} from "../../../styles/styles";

interface Props {
  title: string;
  description: string;
  priority: string;
  setTitle: (e: string) => void;
  setDescription: (e: string) => void;
  setPriority: (e: string) => void;
}

const Form = ({
  title,
  description,
  priority,
  setTitle,
  setDescription,
  setPriority,
}: Props) => {
  return (
    <StyledForm>
      <StyledInputContainer>
        <StyledLabel>Название задачи</StyledLabel>
        <StyledInput
          placeholder="название задачи"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Описание задачи</StyledLabel>
        <StyledInput
          placeholder="описание задачи"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </StyledInputContainer>
      <StyledSelectContainer>
        <StyledLabel>Приоритет</StyledLabel>
        <StyledSelected
          value={priority}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setPriority(event.target.value)
          }
          defaultValue={"Задайте приоритет"}
          options={[
            { value: "низкий", name: "низкий" },
            { value: "средний", name: "средний" },
            { value: "высокий", name: "высокий" },
          ]}
        />
      </StyledSelectContainer>
    </StyledForm>
  );
};

export default Form;
