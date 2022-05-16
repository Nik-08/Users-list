import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UiState = {
  filter: "city",
};

export const slice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const uiActions = slice.actions;
