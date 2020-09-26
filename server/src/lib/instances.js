const InvalidDataError = require("../errors/InvalidData");
const { instances } = require("../_data");

const getInstances = () => {
  return instances;
};

const updateInstance = (id, action) => {
  const index = instances.findIndex((instance) => instance.id === Number(id));

  if (index === -1) {
    throw new InvalidDataError("Instance not found");
  }

  const status = action === "start" ? "running" : "stopped";

  instances.splice(index, 1, {
    ...instances[index],
    status,
  });

  return {
    ...instances[index],
    status,
  };
};

module.exports = {
  getInstances,
  updateInstance,
};
