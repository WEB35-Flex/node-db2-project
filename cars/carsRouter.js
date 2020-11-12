const express = require("express");

const db = require("../data/connection");

const router = express.Router();

router.post("/", (req, res) => {
  const newCar = req.body;

  db("cars")
    .insert(newCar)
    .returning("id")
    .then((ids) => {
      res.status(201).json({ data: ids });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.status(200).json({ data: cars });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
