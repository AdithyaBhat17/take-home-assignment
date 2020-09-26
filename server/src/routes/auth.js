const { userExists, createUser } = require("../lib/users");
const Iron = require("@hapi/iron");
const { isLoggedIn } = require("../middleware/auth");

const auth = (app) => {
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ success: false, message: "Unauthorized" });
    } else {
      if (!userExists(email, password)) {
        res.json({ success: false, message: "No user found" });
      }
      const token = await Iron.seal(
        { email },
        process.env.IRON_KEY,
        Iron.defaults
      );
      res.setHeader("authorization", token);
      res.json({ success: true, message: "Logged in successfully!" });
    }
  });

  app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ success: false, message: "Unauthorized" });
    } else {
      const userCreated = createUser(email, password);
      if (userCreated) {
        const token = await Iron.seal(
          { email },
          process.env.IRON_KEY,
          Iron.defaults
        );
        res.setHeader("authorization", token);
        res.json({ success: true, message: "Signed up successfully!" });
      } else {
        res.json({ success: false, message: "User exists already" });
      }
    }
  });

  app.post("/api/logout", isLoggedIn, (req, res) => {
    res.setHeader("authorization", "");
    res.send({ success: true, message: "Logged out successfully!" });
  });
};

module.exports = auth;
