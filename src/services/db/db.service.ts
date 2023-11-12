import { City, CityFindQueryResponse } from "../../utils/types/City";
import { QueryOptions } from "../../utils/types/QueryOptions";

export interface DBService {
  save(input: City): Promise<City>;

  findAll(
    filter?: string,
    options?: QueryOptions
  ): Promise<CityFindQueryResponse>;

  connect(): void;
}
