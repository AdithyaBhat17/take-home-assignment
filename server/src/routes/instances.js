const { isLoggedIn } = require("../middleware/auth");
const { getInstances, updateInstance } = require("../lib/instances");

const instances = (app) => {
  app.get("/api/instances", isLoggedIn, (_req, res) => {
    res.json({ success: true, instances: getInstances() });
  });

  app.get("/api/instances/:action/:id", isLoggedIn, (req, res) => {
    const { id, action } = req.params;
    if (!["start", "stop"].includes(action)) {
      res.send({ success: false, message: "Invalid action type" });
    }
    try {
      const updatedInstance = updateInstance(id, action);
      res.send({ success: true, updatedInstance });
    } catch ({ message }) {
      res.send({ success: false, message });
    }
  });
};

module.exports = instances;
