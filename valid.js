const users = new Map();

function addUser(id, name, email) {
  if (!id || !name || !email) {
    throw new Error("Missing required user fields");
  }

  users.set(id, {
    id,
    name,
    email,
    createdAt: new Date(),
  });
}

function getUser(id) {
  return users.get(id) ?? null;
}

function getAllUsers() {
  return Array.from(users.values());
}

module.exports = {
  addUser,
  getUser,
  getAllUsers,
};
