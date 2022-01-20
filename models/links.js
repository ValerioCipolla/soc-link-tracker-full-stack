import query from "../db/index.js";

export async function getAllLinks() {
  const data = await query(`SELECT * FROM links;`);
  return data.rows;
}

export async function getLinksByWeek(week) {
  const data = await query(`SELECT * FROM links WHERE week = $1;`, [week]);
  return data.rows;
}

export async function createLink(newLink) {
  const data = await query(`INSERT INTO links (name, link, week) VALUES ($1, $2, $3) RETURNING *;`, [newLink.name, newLink.link, newLink.week]);
  return data.rows;
}

export async function deleteLinkById(id) {
  const data = await query(`DELETE FROM links WHERE id=$1 RETURNING *;`, [id]);
  return data.rows;
}

export async function updateLinkById(updatedLink, id) {
  const data = await query(`UPDATE links SET name = $1, link = $2, week = $3 WHERE id = $4 RETURNING *;`, [updatedLink.name, updatedLink.link, updatedLink.week, id]);
  return data.rows;
}

export async function getLinksByTag(tag) {
  const data = await query(`SELECT * FROM links WHERE tag =$1`, [tag]);
  return data.rows;
}