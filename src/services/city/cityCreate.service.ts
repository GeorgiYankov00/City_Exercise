import { City } from "../../utils/types/City";
import { DBService } from "../db/db.service";
import { CitySchema } from "../../model/city.joi";
import { BadRequestException } from "../../utils/types/BadRequestException";
import { calculateDensity } from "../../utils/densityCalculator.function";

export class CityCreateService {
  private readonly dbService: DBService;

  constructor(dbService: DBService) {
    this.dbService = dbService;
  }

  async create(payload: City): Promise<City> {
    try {
      await CitySchema.validateAsync(payload);
    } catch (err: any) {
      throw new BadRequestException("Invalid payload: " + err.message);
    }
    const density: number = calculateDensity(payload.population, payload.area);
    payload.density = density;

    return this.dbService.save(payload);
  }
}
