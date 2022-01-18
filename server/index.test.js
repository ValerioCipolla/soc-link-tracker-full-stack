import { app } from "./index.js";
import request from "supertest";
import { pool } from "../db/index.js";

describe("get requests working correctly", () => {
  test("/api/links should return all links", async function () {
    await request(app)
      .get("/api/links")
      .expect(200)
      .expect(function (res) {
        const actual = res.body;
        const expected = {
          success: true,
          message: "links found :)",
          payload: expect.any(Array),
        };
        expect(actual).toStrictEqual(expected);
      });
  });
});

afterAll(async () => {
  await pool.end();
});
