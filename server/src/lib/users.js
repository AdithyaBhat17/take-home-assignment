const { users } = require("../_data");

const userExists = (email) => {
  return users.some((user) => user.email === email);
};

const createUser = (email, password) => {
  const duplicateUser = users.some((user) => user.email === email);
  if (!duplicateUser) {
    users.push({
      email,
      password,
      role: "user",
    });
    return true;
  }
  return false;
};

module.exports = {
  userExists,
  createUser,
};
