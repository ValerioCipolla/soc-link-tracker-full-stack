import query from "../db/index.js";

export async function getAllLinks() {
  const data = await query(`SELECT * FROM links;`);
  return data.rows;
}

export async function getLinksByWeek(week) {
  const data = await query(`SELECT * FROM links WHERE week = $1`, [week]);
  return data.rows;
}

export async function createLink(newLink) {
  const data = await query(`INSERT INTO links (name, link, week) VALUES ($1, $2, $3) RETURNING *`, [newLink.name, newLink.link, newLink.week]);
  return data.rows;
}