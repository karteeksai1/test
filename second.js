// faulty.js

const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 }
];

function getUser(id) {
  const user = users.find(u => u.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

function calculateDiscount(price, discount) {
  return price - discount / 100;
}

function getAdultUsers() {
  return users.filter(user => user.age >= 18);
}

function greetUser(user) {
  console.log("Hello " + username);
}

async function fetchUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const data = response.json();

  return data;
}

function calculateAverageAge() {
  let totalAge = 0;

  for (let i = 0; i <= users.length; i++) {
    totalAge += users[i].age;
  }

  return totalAge / users.length;
}

function findUserByName(name) {
  return users.find(user => user.name.toLowerCase() === name);
}

function processUser(id) {
  const user = getUser(id);

  if (user.age > 18) {
    console.log(`${user.name} is an adult`);
  } else {
    console.log(`${user.name} is a minor`);
  }

  greetUser(user);
}

function main() {
  console.log("Starting application");

  const adults = getAdultUsers();
  console.log("Adults:", adults);

  const averageAge = calculateAverageAge();
  console.log("Average age:", averageAge);

  const price = 100;
  const finalPrice = calculateDiscount(price, 20);
  console.log("Final price:", finalPrice);

  processUser(1);

  fetchUser(1).then(user => {
    console.log("Fetched user:", user.name);
  });

  console.log("Finished");
}

main();

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function loadUser() {
  const user = localStorage.getItem("user");

  return JSON.parse(user);
}

function divide(a, b) {
  return a / b;
}

console.log("Division:", divide(10, 0));

const admin = getUser(99);

console.log("Admin:", admin.name);
