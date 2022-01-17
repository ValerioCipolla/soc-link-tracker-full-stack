import express from "express";
// const path = require("path");
// const express = require("express");
import path from "path";
import { fileURLToPath } from "url";
import { getAllLinks } from "../models/links.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from us!" });
});

app.get("/api/greeting", async (req, res) => {
  res.json({message: "Hello to you"});
});

app.get("/api/links", async (req, res) => {
  const result = await getAllLinks();
  res.json({ success: true, message: "links found", payload: result });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
