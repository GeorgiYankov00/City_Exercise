const Joi = require("Joi");

export const CitySchema = Joi.object({
  name: Joi.string().required(),
  area: Joi.number().strict().required(),
  population: Joi.number().strict().required(),
}).unknown(false);
