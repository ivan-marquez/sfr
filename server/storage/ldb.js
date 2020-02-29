const low       = require("lowdb");
const FileSync  = require("lowdb/adapters/FileSync");
const implement = require("implement-js").default;
const Storage   = require("./index");

const adapter = new FileSync("db.json");
const db      = low(adapter);

db.defaults({ str_list: [], substr_list: [] }).write();

const store = {
  getStrings: () => {
    return ["foo", "bar"];
  },
};

module.exports = implement(Storage)(store);
