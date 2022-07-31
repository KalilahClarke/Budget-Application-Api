const express = require("express");
const transactions = express.Router();

const transactionsData = require("../models/bankInformation.js");

transactions.get("/", (request, response) => {
  response.json(transactionsData);
});

transactions.get("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  if (transactionsData[arrayIndex]) {
    response.json(transactionsData[arrayIndex]);
  } else {
    response.status(302).send("No Data Found");
  }
});

transactions.put("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  if (transactionsData[arrayIndex]) {
    transactionsData[arrayIndex] = request.body;
    response.status(200).json(transactionsData[arrayIndex]);
  } else {
    response.status(404).json({
      error: "Page Not Found",
    });
  }
});

transactions.post("/", (request, response) => {
  console.log(request.body);
  transactionsData.push(request.body);
  response.json(transactionsData[transactionsData.length - 1]);
});

transactions.delete("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  const deletedtransaction = transactionsData.splice(arrayIndex, 1);
  response.status(200).json(deletedtransaction);
});

module.exports = transactions;
