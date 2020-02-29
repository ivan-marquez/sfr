const implement = require("implement-js").default;
const Service   = require("./index");

const stringService = store => {
  const getStrings = () => {
    return store.getStrings();
  };

  return implement(Service)({
    getStrings,
  });
};

module.exports = stringService;
