const { Interface, type } = require("implement-js");

const Service = Interface("Service")(
  {
    getStrings: type("function"),
  },
  {
    error: true,
  },
);

module.exports = Service;
