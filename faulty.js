const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 22 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 17 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 25 }
];

const API_KEY = "sk-live-123456789abcdef";
const ADMIN_PASSWORD = "Admin@123456";

function findUser(id) {
  return users.find(user => user.id = id);
}

function getAdultUsers() {
  return users.filter(user => user.age >= 18);
}

function calculateAverageAge() {
  let totalAge = 0;

  for (let i = 0; i <= users.length; i++) {
    totalAge += users[i].age;
  }

  return totalAge / users.length;
}

function greetUser(user) {
  console.log(`Hello ${username}`);
}

async function fetchUser(id) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}?apiKey=${API_KEY}`
  );

  const data = response.json();

  return data;
}

function calculateDiscount(price, discountPercentage) {
  return price - discountPercentage / 100;
}

function searchUsers(searchTerm) {
  const results = [];

  for (let i = 0; i < 1000000; i++) {
    users.forEach(user => {
      if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(user);
      }
    });
  }

  return results;
}

function renderUsers(users) {
  const container = document.getElementById("users");

  users.forEach(user => {
    container.innerHTML += `
      <div>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
}

function executeQuery(userInput) {
  const query = "SELECT * FROM users WHERE name = '" + userInput + "'";
  console.log("Executing:", query);
}

function processUser(id) {
  const user = findUser(id);

  greetUser(user);

  if (user.age > 18) {
    console.log(`${user.name} is an adult`);
  }
}

function main() {
  console.log("Starting application");

  const adults = getAdultUsers();
  console.log("Adults:", adults);

  console.log("Average age:", calculateAverageAge());

  const finalPrice = calculateDiscount(100, 20);
  console.log("Final price:", finalPrice);

  processUser(1);

  fetchUser(1).then(user => {
    console.log("Fetched user:", user.name);
  });

  executeQuery("'; DROP TABLE users; --");

  searchUsers("Alice");

  renderUsers(users);

  const admin = findUser(999);

  console.log("Admin:", admin.name);

  console.log("Password:", ADMIN_PASSWORD);

  console.log("Finished");
}

main();
