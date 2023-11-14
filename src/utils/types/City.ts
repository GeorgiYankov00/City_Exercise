export interface City {
  id: string;
  name: string;
  area: number;
  population: number;
  density: number;
}

export interface CityFindQueryResponse {
  documents: City[];
  count: number;
}
