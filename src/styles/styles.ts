import styled from "styled-components";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/Modal/MyModal";
import MyTextArea from "../components/UI/TextArea/MyTextArea";
import MySelect from "../components/UI/Select/MySelect";

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid #ccc;
`;

export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TaskDescription = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  max-width: 100%; /* адаптивная ширина */
  @media (min-width: 768px) {
    max-width: 80vw; /* ширина для экранов с шириной 768px и выше */
  }
  @media (min-width: 1200px) {
    max-width: 60vw; /* ширина для экранов с шириной 1200px и выше */
  }
`;

export const TaskActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;



export const StyledMyButton = styled(MyButton)`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const StyledMyModal = styled(MyModal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const TaskId = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const TaskTitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 800px; /* задайте желаемую ширину */
  color: #666;
`;

export const TaskPriority = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

export const TaskLabel = styled.span`
  font-size: 12px;
  color: #999;
  margin-right: 4px;
  font-weight: bold;
`;

export const TasksListContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TasksListHeader = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const TasksFiltersContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TasksListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const TasksListLi = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const StyledSelect = styled.select`
  padding: 5px;
  margin: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  width: 200px;
  height: 30px;
`;

export const StyledOption = styled.option`
  padding: 5px;
  font-size: 14px;
`;

export const StyledForm = styled.form`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledInputContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledInput = styled(MyTextArea)`
  width: 100%;
  max-width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const StyledSelected = styled(MySelect)`
  width: 250px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TaskManagerContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TaskManagerHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TaskCreatorContainer = styled.div`
  margin-bottom: 20px;
`;

export const TasksListContainerTL = styled.div`
  margin-top: 20px;
  `;

  export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;

export const MyModalContent = styled.div`
  position: relative;
`;