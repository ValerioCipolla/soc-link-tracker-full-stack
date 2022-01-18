import query from "../db/index.js";

export async function getAllLinks() {
  const data = await query(`SELECT * FROM links;`);
  return data.rows;
}

export async function getLinksByWeek(week) {
  const data = await query(`SELECT * FROM links WHERE week = $1`, [week]);
  return data.rows;
}
