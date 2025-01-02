import { useSelector, useDispatch } from "react-redux";
import {statusBtnPress} from './taskSlice';

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    console.log(state.tasks);
    return state.tasks;
  });

  return (
    <>
      <h1>My Task List</h1>
      {tasks.tasks.map((task) => (
        <div key={task.date}>
          <h2>{task.date}</h2>
          <ul>
            {task.todos.map((todo, todoIndex) => (
              <li>
                {todo.toDo}
                <button onClick={() => dispatch(statusBtnPress({date: task.date, todoIndex}))}>{todo.status}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
