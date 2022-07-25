import { configureStore, createSlice } from "@reduxjs/toolkit";

const scroll = createSlice({
  name: "scroll",
  initialState: { scrollY: 0 },
  reducers: {
    getScrollY: (state, action) => {
      state.scrollY = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    scroll: scroll.reducer,
  },
});
export const { getScrollY } = scroll.actions;

