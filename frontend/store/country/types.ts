import { City } from "../city/types";

export type Country = {
  country: string;
  cities: City[];
};

export interface CountryState {
  country: null | Country;
  loading: boolean;
}
