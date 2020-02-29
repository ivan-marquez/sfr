const { Interface, type } = require("implement-js");

const Storage = Interface("Storage")(
  {
    getStrings: type("function"),
  },
  {
    error: true,
  },
);

module.exports = Storage;
