import fs from "node:fs";
import path from "node:path";
import db from "../src/config/database.js";

const seedsPath = path.join(process.cwd(), "database", "seeds");
const seeds = fs.readdirSync(seedsPath).sort();

db.serialize(() => {
  for (const seed of seeds) {
    const filePath = path.join(seedsPath, seed);
    const sql = fs.readFileSync(filePath, "utf-8");

    db.exec(sql, (error) => {
      if (error) {
        console.error(`Error en ${seed}`, error);
        return;
      }

      console.log(`${seed} ejecutado`);
    });
  }
});