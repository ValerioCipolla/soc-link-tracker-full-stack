import query from "../index.js";
import { links } from "../seed-data.js";

export async function seedLinksTable() {
  for (let i = 0; i < links.length; i++) {
    await query(`INSERT INTO links (name, link) VALUES ($1, $2)`, [
      links[i].name,
      links[i].link,
    ]);
  }
}

seedLinksTable();
