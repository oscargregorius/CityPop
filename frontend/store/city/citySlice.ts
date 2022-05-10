import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City, CityState } from "./types";

const initialState: CityState = {
  city: null,
  loading: false,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, { payload }: PayloadAction<City | null>) => {
      state.city = payload;
      state.loading = false;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setCity, setLoading } = citySlice.actions;

export const citySelector = (state: { cityReducer: CityState }) =>
  state.cityReducer;

export default citySlice.reducer;
