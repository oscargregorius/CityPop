export interface City {
  id: number;
  city: string;
  population: number;
}

export interface CityState {
  city: null | City;
  loading: boolean;
}
