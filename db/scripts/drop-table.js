import query from "../index.js";

export async function dropLinksTable() {
  await query(`DROP TABLE IF EXISTS links`);
}

dropLinksTable();
