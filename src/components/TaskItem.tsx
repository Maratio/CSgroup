import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import ITask from '../models/ITask';
import { deleteTask } from '../store/reducers/tasksSlice';
import FormEdit from './FormEdit';
import MyButton from './UI/Button/MyButton';
import MyModal from './UI/Modal/MyModal';
import styled from 'styled-components';


// interface Props {
//     task: ITask
// }

// const TaskItem = ({ task }: Props) => {
//   const dispatch = useAppDispatch();
//   const [modal, setModal] = useState(false);

//   const handleEdit = () => {
//     setModal(true)
//   };

//   const handleDelete = () => {
//     dispatch(deleteTask(task.id));
//   };

//   return (
//     <div className="task">
//       <div className="task__content">
//         <strong>
//           {task.id}. {task.title} {task.priority}
//           {/* {props.post.id}. {props.post.title} */}
//         </strong>
//         <div>{task.description}</div>
//       </div>
//       <div className="post__btns">
//       <MyButton onClick={handleEdit}>Edit</MyButton>
//         <MyButton onClick={handleDelete}>Удалить</MyButton>
//         <MyModal visible={modal} setVisible={setModal}>
//          <FormEdit setModal={setModal} task={task}/>
//         </MyModal>
//       </div>
//     </div>
  
//   );
// };

// export default TaskItem;

interface Props {
  task: ITask
}

const TaskItem = ({ task }: Props) => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);

  const handleEdit = () => {
    setModal(true)
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

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
  <TaskDescription>
    {task.description}
  </TaskDescription>
</TaskContent>
      <TaskActions>
        <StyledMyButton onClick={handleEdit}>Редактировать</StyledMyButton>
        <StyledMyButton onClick={handleDelete}>Удалить</StyledMyButton>
        <StyledMyModal visible={modal} setVisible={setModal}>
          <FormEdit setModal={setModal} task={task} />
        </StyledMyModal>
      </TaskActions>
    </TaskWrapper>
  );
};

export default TaskItem;

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid #ccc;
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const TaskDescription = styled.div`
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

const TaskActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const StyledMyButton = styled(MyButton)`
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

const StyledMyModal = styled(MyModal)`
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

const TaskId = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const TaskTitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 800px; /* задайте желаемую ширину */
  color: #666;
`;

const TaskPriority = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const TaskLabel = styled.span`
  font-size: 12px;
  color: #999;
  margin-right: 4px;
  font-weight: bold;
`;