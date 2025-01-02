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
  reducers: {},
});

export default taskSlice.reducer;
