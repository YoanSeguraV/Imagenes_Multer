import express from "express";
import cors from "cors";
import morgan from "morgan";
import AppRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("image"));
app.use(AppRoutes);

app.listen(4000);
console.log("Servidor Corriendo");
