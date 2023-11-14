import { CityCreateService } from "./../services/city/cityCreate.service";
import { CityFetcherService } from "../services/city/cityFetcher.service";
import { City } from "../utils/types/City";

export class CityController {
  private readonly cityFetcherService: CityFetcherService;
  private readonly cityCreateService: CityCreateService;

  constructor(
    cityFetcherService: CityFetcherService,
    cityCreateService: CityCreateService
  ) {
    this.cityFetcherService = cityFetcherService;
    this.cityCreateService = cityCreateService;
  }

  async getCities(req: any, res: any): Promise<City[]> {
    const result = await this.cityFetcherService.findAll(req.query);
    res.set("X-Total-Count", result.count);
    res.append("Access-Control-Expose-Headers", "X-Total-Count");
    return result.documents;
  }

  async createCity(req: any): Promise<City> {
    const result = await this.cityCreateService.create(req.body);
    return result;
  }
}
