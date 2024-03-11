const express = require("express");
const app = express;

const customers = ["A", "B", "C", "D", "E", "F"];
const restaurants = ["G", "H", "I", "J", "K", "L"];
const reservation = ["M", "N", "O", "P", "Q", "R"];

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

app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.get("/api/restaurants/:restaurant", (req, res) => {
  const { restaurant } = req.params;
  res.json(restaurants.includes(restaurant));
});

app.push("/api/restaurants/:restaurant", (req, res) => {
  const { restaurant } = req.params;
  restaurants.push(restaurant);
  res.json(restaurant);
});

app.get("/api/reservations", (req, res) => {
  res.json(reservations);
});

app.get("/api/reservations/:reservation", (req, res) => {
  const { reservation } = req.params;
  res.json(reservations.includes(reservation));
});

app.push("/api/reservations/:reservation", (req, res) => {
  const { reservation } = req.params;
  reservations.push(reservation);
  res.json(reservation);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
