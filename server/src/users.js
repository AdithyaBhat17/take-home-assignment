const { users } = require("./_data");

const userExists = (email, password) => {
  return users.some(
    (user) => user.email === email && user.password === password
  );
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
