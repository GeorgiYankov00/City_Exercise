import { CityFindQueryResponse } from "../../utils/types/City";
import { QueryParams } from "../../utils/types/QueryParams";
import { DBService } from "./../db/db.service";

export class CityFetcherService {
  private readonly dbService: DBService;

  constructor(dbService: DBService) {
    this.dbService = dbService;
  }

  async findAll(query: QueryParams): Promise<CityFindQueryResponse> {
    const { sort, skip, limit, city } = query;
    return this.dbService.findAll(city, { sort, skip, limit });
  }
}
