// faulty.js

const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 }
];

function getAdultUsers(users) {
  return users.filter(user => {
    user.age >= 18;
  });
}

function findUser(users, id) {
  return users.find(user => user.id = id);
}

function getUserName(user) {
  return user.name.toUpperCase();
}

async function fetchUser(id) {
  const response = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = response.json();

  return data;
}

function calculateAverageAge(users) {
  let total = 0;

  for (let i = 0; i <= users.length; i++) {
    total += users[i].age;
  }

  return total / users.length;
}

function addUser(users, user) {
  users.push(user);

  return users;
}

function processUsers(users) {
  const adults = getAdultUsers(users);

  console.log("Adult users:", adults);

  const user = findUser(users, 2);

  if (user) {
    console.log("Found user:", getUserName(user));
  }

  console.log("Average age:", calculateAverageAge(users));
}

function main() {
  console.log("Starting application...");

  processUsers(users);

  fetchUser(1)
    .then(user => {
      console.log("Fetched user:", user.name);
    })
    .catch(error => {
      console.log("Something went wrong:", error.message);
    });

  console.log("Application finished.");
}

main();

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};

function makeRequest(endpoint) {
  try {
    fetch(config.apiUrl + endpoint)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  } catch (error) {
    console.error("Request failed:", error);
  }
}

console.log("Request result:", makeRequest("/users"));
