import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
  console.log("Conexão succed");
});

const port = process.env.PORT || 8888;

const app = express();

app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
export default app;
