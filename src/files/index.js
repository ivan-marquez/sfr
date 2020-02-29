const { Interface, type } = require("implement-js");

const Service = Interface("Service")(
  {
    processFile: type("function"),
  },
  {
    error: true,
  },
);

module.exports = Service;
