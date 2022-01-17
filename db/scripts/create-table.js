import query from "../index.js";

export async function createLinksTable() {
  await query(
    `CREATE TABLE IF NOT EXISTS links (id SERIAL PRIMARY KEY, name TEXT, link TEXT);`
  );
}

createLinksTable();
