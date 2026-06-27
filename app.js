const { sum, average } = require("./utils");

const nums = [10, 20, 30, 40];

console.log("Sum:", sum(nums));
console.log("Average:", average(nums));

function startServer() {
  console.log("App started successfully");
}

startServer();
