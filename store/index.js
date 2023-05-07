import { createSlice, configureStore } from "@reduxjs/toolkit";

const controlSlice = createSlice({
  name: "control",
  initialState: { selectButton: false, scroll: "", page: "MAIN_MENU" },
  reducers: {
    toggleButton(state) {
      state.selectButton = !state.selectButton;
    },
    setScroll(state, { payload }) {
      state.scroll = payload;
    },
    setPage(state, { payload }) {
      state.page = payload;
    }
  }
});
export const store = configureStore({ reducer: controlSlice.reducer });
export const controlActions = controlSlice.actions;
