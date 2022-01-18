import { app } from "./index.js";
import request from "supertest";
import { pool } from "../db/index.js";

describe("get requests working correctly", () => {
  test("/api/links should return all links, and each link should be an object with the correct structure", async function () {
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

        actual.payload.forEach(function (link) {
          const actual = link;
          const expected = {
            id: expect.any(Number),
            name: expect.any(String),
            link: expect.any(String),
            week: expect.any(Number),
          };
          expect(actual).toStrictEqual(expected);
        });
      });
  });

  test("/api/links/week/1 returns all links from week 1, each link should be an object with the correct structure", async function () {
    await request(app)
      .get("/api/links/week/1")
      .expect(200)
      .expect(function (res) {
        const actual = res.body;
        const expected = {
          success: true,
          message: `links from week 1 found :)`,
          payload: expect.any(Array),
        };
        expect(actual).toStrictEqual(expected);

        actual.payload.forEach(function (link) {
          const actual = link;
          const expected = {
            id: expect.any(Number),
            name: expect.any(String),
            link: expect.any(String),
            week: expect.any(Number),
          };
          expect(actual).toStrictEqual(expected);
        });
      });
  });
});

afterAll(async () => {
  await pool.end();
});
