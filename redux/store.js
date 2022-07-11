import { configureStore, createSlice } from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    completed: Array(27).fill(false),
  },
  reducers: {
    setCompleted: (state, action) => {
      state.completed[action.payload.id] = action.payload.value;
    }
  }
});

const store = configureStore({
  reducer: {
    sections: sectionsSlice.reducer,
  }
})

export const { setCompleted } = sectionsSlice.actions;

export const selectCompleted = (state) => state.sections.completed;

export default store;
