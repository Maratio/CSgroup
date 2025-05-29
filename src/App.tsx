import TaskCreator from "./components/TaskCreator";
import TasksList from "./components/TasksList";
import { FormFieldsProvider } from "./context/FormFieldsProvider";
import {
  TaskCreatorContainer,
  TaskManagerContainer,
  TaskManagerHeader,
  TasksListContainerTL,
} from "./styles/styles";

const App = () => {
  return (
    <FormFieldsProvider>
      <TaskManagerContainer>
        <TaskManagerHeader>Менеджер задач</TaskManagerHeader>
        <TaskCreatorContainer>
          <TaskCreator />
        </TaskCreatorContainer>
        <TasksListContainerTL>
          <TasksList />
        </TasksListContainerTL>
      </TaskManagerContainer>
    </FormFieldsProvider>
  );
};

export default App;
