import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorState } from "./types";

const initialState: ErrorState = {
  errorMsg: "",
  isOpen: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorMsg: (state, { payload }: PayloadAction<string>) => {
      state.errorMsg = payload;
    },
    setIsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
  },
});

export const { setErrorMsg, setIsOpen } = errorSlice.actions;

export const errorSelector = (state: { errorReducer: ErrorState }) =>
  state.errorReducer;

export default errorSlice.reducer;
