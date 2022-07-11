import { configureStore, createSlice } from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    completed: Array(27).fill(false),
  },
  reducers: {
    setCompleted: (state, action) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(action.payload.id, action.payload.value);
      }
      state.completed[action.payload.id] = action.payload.value;
    },
    loadCompletedState: (state, action) => {
      state.completed = action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    sections: sectionsSlice.reducer,
  }
})

export const { setCompleted, loadCompletedState } = sectionsSlice.actions;

export const selectCompleted = (state) => state.sections.completed;

export default store;
