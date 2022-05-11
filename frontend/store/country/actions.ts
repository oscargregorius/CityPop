import { AppThunk } from "../";
import { setCountry, setLoading } from "./countrySlice";
import { setIsOpen, setErrorMsg } from "../errorHandler/errorSlice";
import axios from "axios";

export const getCountry = (country: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const countryUrl: string = `http://localhost:4000/rest/country/${country}`;
      const res = await axios.get(countryUrl);
      res.status === 200 && dispatch(setCountry(res.data));
      if (res.status !== 200) {
        dispatch(setErrorMsg(res.data));
        dispatch(setIsOpen(true));
      }
      return;
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMsg(error.response.data.toUpperCase()));
      dispatch(setIsOpen(true));
      return;
    }
  };
};
