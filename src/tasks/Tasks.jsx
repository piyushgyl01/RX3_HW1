import { use } from "react";
import { useSelector } from "react-redux";

export default function Tasks() {
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
            {task.todos.map((todo) => (
              <li>
                {todo.toDo} <br />
                <span>- Status: {todo.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
