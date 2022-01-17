import query from "../index.js";

export async function readLinksTable() {
  const data = await query(`SELECT * FROM links`);
  console.log(data.rows);
}

readLinksTable();
