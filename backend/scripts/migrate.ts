import fs from "node:fs";
import path from "node:path";
import db from "../src/config/database.js";
const migrationsPath = path.join(process.cwd(), "database", "migrations");
const migrations = fs.readdirSync(migrationsPath).sort();
db.serialize(() => {
for (const migration of migrations){
    const filePath = path.join(migrationsPath, migration);
    const sql = fs.readFileSync(filePath, "utf-8");
    db.exec(sql, (error)=> {
        if(error){
            console.error(`Error en ${migration}`, error);
            return;
        }
        console.log(`${migration} ejecutada`)
    })
}
});