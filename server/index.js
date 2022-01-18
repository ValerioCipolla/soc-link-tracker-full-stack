import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getAllLinks } from "../models/links.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import { pool } from "../db/index.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use("/", router);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from us!" });
});

app.get("/greeting", async (req, res) => {
  res.json({ message: "Hello to you" });
});

app.get("/links", async (req, res) => {
  console.log("run");
  const result = await getAllLinks();
  res.json({ success: true, message: "links found :)", payload: result });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
