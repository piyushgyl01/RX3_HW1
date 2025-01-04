import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(
    "https://task-list-hw-server-student-neog-ca.replit.app/tasks"
  );

  return response.data;
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {
    statusBtnPress: (state, action) => {
      const { date, taskId } = action.payload;
      const task = state.tasks.find((task) => task.date === date);
      if (task) {
        const todo = task.tasks.find((t) => t.taskId === taskId);
        if (todo) {
          todo.taskStatus =
            todo.taskStatus === "Pending" ? "Completed" : "Pending";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "success";
      state.tasks = action.payload.tasks;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const { statusBtnPress } = taskSlice.actions;

export default taskSlice.reducer;
