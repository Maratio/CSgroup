import React from "react";
import MyInput from "../Input/MyInput";
import MySelect from "../Select/MySelect";
import styled from "styled-components";
import MyTextArea from "../TextArea/MyTextArea";

// interface Props {
//     title: string
//     description: string
//     priority: string
//     setTitle: (e:string) => void
//     setDescription: (e:string) => void
//     setPriority: (e:string) => void
// }

// const Form = ({ title,
//     description,
//     priority,
//     setTitle,
//     setDescription,
//     setPriority, }: Props) => {
//   return (
//     <form>
//       <MyInput
//         placeholder="название задачи"
//         type="text"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//       <MyInput
//         placeholder="описание задачи"
//         type="text"
//         value={description}
//         onChange={(event) => setDescription(event.target.value)}
//       />

//       <MySelect
//         value={priority}
//         onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
//           setPriority(event.target.value)
//         }
//         defaultValue={"Задайте приоритет"}
//         options={[
//           { value: "низкий", name: "низкий" },
//           { value: "средний", name: "средний" },
//           { value: "высокий", name: "высокий" },
//         ]}
//       />
//     </form>
//   );
// };

// export default Form;

interface Props {
  title: string
  description: string
  priority: string
  setTitle: (e: string) => void
  setDescription: (e: string) => void
  setPriority: (e: string) => void
}

const StyledForm = styled.form`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledInputContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledInput = styled(MyTextArea)`
  width: 100%;
  max-width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const StyledSelect = styled(MySelect)`
  width: 250px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = ({ title, description, priority, setTitle, setDescription, setPriority }: Props) => {
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
        <StyledSelect
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