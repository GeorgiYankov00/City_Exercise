import { CityController } from "../controllers/city.controller";
import { CityCreateService } from "../services/city/cityCreate.service";
import { CityFetcherService } from "../services/city/cityFetcher.service";
import { MongoDBService } from "../services/db/mongoDB.service";

export function setupApp(): CityController {
  const dbService = new MongoDBService();
  const cityFetcherService = new CityFetcherService(dbService);
  const cityCreateService = new CityCreateService(dbService);
  return new CityController(cityFetcherService, cityCreateService);
}
