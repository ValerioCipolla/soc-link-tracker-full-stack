import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getAllLinks, getLinksByWeek, createLink, deleteLinkById, updateLinkById } from "../models/links.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import { create } from "domain";

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

//Default test greeting.
app.get("/api", (req, res) => {
  res.json({ message: "Hello from us!" });
});

//Default test greeting.
app.get("/api/greeting", async (req, res) => {
  res.json({ message: "Hello to you" });
});

//Find all links in the table.
app.get("/api/links", async (req, res) => {
  const result = await getAllLinks();
  res.json({ success: true, message: "links found :)", payload: result });
});

//Find links by week, with alternate no weeks found response.
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

//Post request to database for new links.
app.post("/api/links", async (req, res) => {
  const newLink = req.body;
  const result = await createLink(newLink);
  res.json({
    success: true,
    message: `link created in week ${newLink.week} with name ${newLink.name}`,
    payload: result,
  })
})

//Delete request for hidden page, to remove links from table. With link not found result json.
app.delete("/api/links/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteLinkById(id);
  if (result.length <= 0) {
    res.json({
      success: false,
      message: `link with id ${id} not found`,
    })
    return;
  }
  res.json({
    success: true,
    message: `link deleted with id ${id}`,
    payload: result,
})})

//update request for the api, upadting by id. (may change to a patch)
app.put("/api/links/:id", async (req, res) => {
  const id = req.params.id;
  const updatedLink = req.body;
  const result = await updateLinkById(updatedLink, id);
  if (result.length <= 0) {
    res.json({
      success: false,
      message: `link with id ${id} not found`,
    })
    return;
  }
  res.json({
    success: true,
    message: `link updated with id ${id}`,
    payload: result,
})})

//Responds to a request with no response with the api's home page.
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//displays the port that the server is listening on.
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
