import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./coffee-moon.sqlite", (error)=> {
    if(error){
        console.error("Error conectando a sqlite", error);
        return;
    }
    console.log("Conectado a sqlite");
});
export default db;