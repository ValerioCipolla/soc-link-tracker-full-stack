import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getAllLinks, getLinksByWeek } from "../models/links.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

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
app.use("/api", router);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from us!" });
});

app.get("/api/greeting", async (req, res) => {
  res.json({ message: "Hello to you" });
});

app.get("/api/links", async (req, res) => {
  const result = await getAllLinks();
  res.json({ success: true, message: "links found :)", payload: result });
});

app.get("/api/links/week/:week", async (req, res) => {
  const week = req.params.week;
  const result = await getLinksByWeek(week);
  if (result.length <= 0) {
    res.json({
      success: false,
      message: `no links from week ${week} were found.`,
    });
    return;
  }
  res.json({
    success: true,
    message: `links from week ${week} found :)`,
    payload: result,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
