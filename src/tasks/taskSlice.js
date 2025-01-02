import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        date: "15/07/2024",
        todos: [
          {
            toDo: "Get Groceries from the market.",
            status: "Pending",
          },
          {
            toDo: "Go to Gym.",
            status: "Completed",
          },
          {
            toDo: "Water the plants.",
            status: "Completed",
          },
        ],
      },
      {
        date: "16/07/2024",
        todos: [
          {
            toDo: "Go to the park.",
            status: "Completed",
          },
          {
            toDo: "Get my room cleaned.",
            status: "Pending",
          },
        ],
      },
    ],
  },
  reducers: {
    statusBtnPress: (state, action) => {
      const { date, todoIndex } = action.payload;
      const task = state.tasks.find((task) => task.date === date);
      if (task) {
        task.todos[todoIndex].status =
          task.todos[todoIndex].status === "Pending" ? "Completed" : "Pending";
      }
    },
  },
});

export const {statusBtnPress} = taskSlice.actions

export default taskSlice.reducer;
