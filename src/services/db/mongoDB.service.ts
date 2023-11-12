import { CityModel } from "../../model/city";
import { City, CityFindQueryResponse } from "../../utils/types/City";
import { QueryOptions } from "../../utils/types/QueryOptions";
import { DBService } from "./db.service";
import mongoose from "mongoose";

export class MongoDBService implements DBService {
  constructor() {
    this.connect();
  }

  async findAll(
    queryFilter?: string,
    queryOptions?: QueryOptions
  ): Promise<CityFindQueryResponse> {
    const options = {
      skip: queryOptions?.skip,
      limit: queryOptions?.limit,
      sort: this.createSortQuery(queryOptions?.sort),
    };
    const filter = this.createFilterQuery(queryFilter);

    const [documents, count] = await Promise.all([
      CityModel.find(filter, null, options),
      CityModel.countDocuments(filter),
    ]);

    return { documents, count };
  }

  async save(input: City): Promise<City> {
    const city = await new CityModel(input);
    let result;
    try {
      result = await city.save();
    } catch (err: any) {
      console.error("Unable to save city. Error:", err.message);
    }
    if (!result) {
      throw Error("Unable to get response from DB. Payload: " + city);
    }

    return result;
  }

  async connect() {
    if (!process.env.DB_URL) {
      throw new Error("DB Connection String undefined!");
    }
    console.log("Connecting to Mongo");
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("Successfully connected to Mongo");
      })
      .catch((err) => {
        throw Error("Unable to connect to Mongo. " + err);
      });
  }

  private createSortQuery(sortParams?: string) {
    if (!sortParams) {
      return;
    }
    const sortElements: string[] = sortParams.split(",");
    const sortQuery: { [key: string]: number } = {};
    sortElements.forEach((element) => {
      if (element.at(0) === "-") {
        sortQuery[element.slice(1)] = -1;
      } else {
        sortQuery[element] = 1;
      }
    });

    return sortQuery;
  }

  private createFilterQuery(filter?: string): {} {
    if (!filter) {
      return {};
    }
    return { name: { $regex: `.*${filter}.*`, $options: "i" } };
  }
}
