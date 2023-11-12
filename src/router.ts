import { setupApp } from "./utils/setup";
import { City } from "./utils/types/City";

const router = require("express").Router();

const controller = setupApp();

router.use("/city", async (req: any, res: any, next: any) => {
  try {
    req.cityController = controller;
    next();
  } catch (err) {
    next(err);
  }
});

router.get("/city", async (req: any, res: any, next: any) => {
  try {
    const cities = await req.cityController.getCities(req, res);
    res.send(cities);
  } catch (error) {
    next(error);
  }
});

router.post("/city", async (req: any, res: any, next: any) => {
  try {
    const city: City = await req.cityController.createCity(req);
    res.status(201);
    res.send(city);
  } catch (error) {
    next(error);
  }
});

router.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  let statusCode = err.code;
  let message = err.message;

  if (!statusCode || !message) {
    statusCode = 500;
    message = "Internal Server Error";
  }

  res.status(statusCode).json({ error: message });
});

module.exports = router;
