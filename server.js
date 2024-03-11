const express = require("express");
const app = express;

const customers = ["A", "B", "C", "D", "E", "F"];

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.get("/api/customers/:customer", (req, res) => {
  const { customer } = req.params;
  res.json(customers.includes(customer));
});

app.push("/api/customers/:customer", (req, res) => {
  const { customer } = req.params;
  customers.push(customer);
  res.json(customer);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
