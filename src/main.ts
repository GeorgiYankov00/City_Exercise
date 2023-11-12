import "dotenv/config";

async function main() {
  const router = require("./router");
  const express = require("express");
  const cors = require("cors");
  const bodyParser = require("body-parser");
  const app = express();

  app.use(bodyParser.json());
  app.use(router);
  app.use(cors());

  app.listen(process.env.PORT, () =>
    console.log("Application listening on Port: " + process.env.PORT)
  );
}

main();
