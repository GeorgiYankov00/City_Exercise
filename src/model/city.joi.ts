const Joi = require("Joi");

export const CitySchema = Joi.object({
  name: Joi.string().required(),
  area: Joi.number().positive().strict().required(),
  population: Joi.number().min(1).strict().required(),
}).unknown(false);
