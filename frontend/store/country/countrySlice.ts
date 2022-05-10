import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country, CountryState } from "./types";

const initialState: CountryState = {
  country: null,
  loading: false,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, { payload }: PayloadAction<Country | null>) => {
      state.country = payload;
      state.loading = false;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setCountry, setLoading } = countrySlice.actions;

export const countrySelector = (state: { countryReducer: CountryState }) =>
  state.countryReducer;

export default countrySlice.reducer;
