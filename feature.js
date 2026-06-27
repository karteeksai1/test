const { sum } = require("./utils");

function processData(data) {
  const total = sum(data);

<<<<<<< HEAD
  console.log("Processing old logic");
  return total / data.length;
=======
  console.log("Processing new logic");
  return calculateAverage(data);
>>>>>>> feature/new-average
}

const status = "active";
const status = "inactive"; // duplicate declaration

function brokenFunction() {
  console.log("This function has syntax issues"
}

module.exports = {
  processData,
};
