import { AppThunk } from "../";
import { setCity, setLoading } from "./citySlice";
import { setIsOpen, setErrorMsg } from "../errorHandler/errorSlice";
import axios from "axios";

export const getCity = (city: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const cityUrl: string = `http://localhost:4000/rest/city/${city}`;
      const res = await axios.get(cityUrl);
      res.status === 200 && dispatch(setCity(res.data));
      if (res.status !== 200) {
        dispatch(setErrorMsg("The country was not found"));
        dispatch(setIsOpen(true));
      }
      return;
    } catch (error) {
      dispatch(setErrorMsg("Something went wrong"));
      dispatch(setIsOpen(true));
      return;
    }
  };
};
