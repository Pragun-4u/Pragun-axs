import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", router);

  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
};

setupAndStartServer();
