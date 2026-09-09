function processUsers(users) {
  var result = [];

  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users.length; j++) {
      if (users[i].id == users[j].id) {
        result.push({
          id: users[i].id,
          name: users[i].name.toUpperCase(),
          email: users[i].email,
        });
      }
    }
  }

  console.log("Processed users:", result);

  return result;
}
