const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 22 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 17 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 25 }
];

function findUser(id) {
  return users.find(user => user.id === id) || null;
}

function getAdultUsers() {
  return users.filter(user => user.age >= 18);
}

function calculateAverageAge() {
  if (users.length === 0) {
    return 0;
  }

  const totalAge = users.reduce((total, user) => total + user.age, 0);
  return totalAge / users.length;
}

function greetUser(user) {
  if (!user) {
    return;
  }

  console.log(`Hello ${user.name}`);
}

async function fetchUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return await response.json();
}

function calculateDiscount(price, discountPercentage) {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Invalid price or discount");
  }

  return price * (1 - discountPercentage / 100);
}

async function main() {
  console.log("Starting application");

  const adults = getAdultUsers();
  console.log("Adults:", adults);

  console.log("Average age:", calculateAverageAge());

  const finalPrice = calculateDiscount(100, 20);
  console.log("Final price:", finalPrice);

  const user = findUser(1);

  if (user) {
    greetUser(user);
  }

  try {
    const fetchedUser = await fetchUser(1);
    console.log("Fetched user:", fetchedUser.name);
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
  }

  console.log("Finished");
}

main().catch(error => {
  console.error("Application failed:", error.message);
});
