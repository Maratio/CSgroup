import { useState } from "react";
import { useAppDispatch } from "../hooks";
import ITask from "../models/ITask";
import {
  StyledMyButton,
  StyledMyModal,
  TaskActions,
  TaskContent,
  TaskDescription,
  TaskId,
  TaskLabel,
  TaskPriority,
  TaskTitle,
  TaskTitleText,
  TaskWrapper,
} from "../styles/styles";
import { handleDeleteTask, handleEditTask } from "../utils/handlers";
import FormEdit from "./UI/Forms/FormEdit";

interface Props {
  task: ITask;
}

const TaskItem = ({ task }: Props) => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);

  return (
    <TaskWrapper>
      <TaskContent>
        <TaskTitle>
          <TaskId>
            <TaskLabel>№</TaskLabel> {task.id}
          </TaskId>
          <TaskTitleText>
            <TaskLabel>Название:</TaskLabel> {task.title}
          </TaskTitleText>
          <TaskPriority>
            <TaskLabel>Приоритет:</TaskLabel> {task.priority}
          </TaskPriority>
        </TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
      </TaskContent>
      <TaskActions>
        <StyledMyButton onClick={() => handleEditTask(setModal)}>
          Редактировать
        </StyledMyButton>
        <StyledMyButton onClick={() => handleDeleteTask(dispatch, task)}>
          Удалить
        </StyledMyButton>
        <StyledMyModal visible={modal} setVisible={setModal}>
          <FormEdit setModal={setModal} task={task} />
        </StyledMyModal>
      </TaskActions>
    </TaskWrapper>
  );
};

export default TaskItem;
