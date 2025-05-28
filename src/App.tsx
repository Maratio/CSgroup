import styled from "styled-components";
import TaskCreator from './components/TaskCreator';
import TasksList from './components/TasksList';
import { TaskCreatorContainer, TaskManagerContainer, TaskManagerHeader, TasksListContainer, TasksListContainerTL } from "./styles/styles";


const App = () => {

  
  return (
<TaskManagerContainer>
      <TaskManagerHeader>Менеджер задач</TaskManagerHeader>
      <TaskCreatorContainer>
        <TaskCreator />
      </TaskCreatorContainer>
      <TasksListContainerTL>
        <TasksList />
      </TasksListContainerTL>
    </TaskManagerContainer>
  );
};

export default App;

