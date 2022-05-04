export type Country = {
  country: string;
  cities: { id: number; city: string; population: number }[];
};

export interface CountryState {
  country: null | Country;
  loading: boolean;
}
