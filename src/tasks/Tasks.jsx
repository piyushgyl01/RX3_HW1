import { useSelector, useDispatch } from "react-redux";
import { statusBtnPress, fetchTasks } from "./taskSlice";
import { useEffect } from "react";

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <h1>My Task List</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tasks?.map((task) => (
        <div key={task.date}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((todo) => (
              <li key={todo.taskId}>
                {todo.task}
                <button
                  onClick={() =>
                    dispatch(
                      statusBtnPress({
                        date: task.date,
                        taskId: todo.taskId,
                      })
                    )
                  }
                >
                  {todo.taskStatus}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
