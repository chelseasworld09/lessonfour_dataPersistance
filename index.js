const express = require("express");
const sqlite = require("sqlite").verbose();

const db = new sqlite3.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");

db.each(`SELECT * from Artist and Albums`, (err, row) => {
  if (err) throw err;
  console.log(row);
});
db.close();
