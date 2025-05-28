import styled from "styled-components";
import "./App.css";
import TaskCreator from './components/TaskCreator';
import TasksList from './components/TasksList';


const App = () => {

  const TaskManagerContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskManagerHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TaskCreatorContainer = styled.div`
  margin-bottom: 20px;
`;

const TasksListContainer = styled.div`
  margin-top: 20px;
`;
  return (
<TaskManagerContainer>
      <TaskManagerHeader>Менеджер задач</TaskManagerHeader>
      <TaskCreatorContainer>
        <TaskCreator />
      </TaskCreatorContainer>
      <TasksListContainer>
        <TasksList />
      </TasksListContainer>
    </TaskManagerContainer>



    
      // <div>
      //   <h1>Task Manager</h1>
      //   <TaskCreator/>
      //   <TasksList />
      // </div>
  );
};

export default App;

