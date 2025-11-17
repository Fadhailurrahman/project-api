import fs from "fs";
import csv from "csv-parser";
import { customersData } from "../data/customersData.js";

fs.createReadStream("./data/telco.csv")
  .pipe(csv())
  .on("data", (row) => {
    customersData.push(row);
  })
  .on("end", () => {
    console.log("Customer data loaded successfully.");
  });

export const getAllCustomers = (req, res) => {
  res.json({
    status: "success",
    count: customersData.length,
    data: customersData,
  });
};

export const getCustomerById = (req, res) => {
  const { id } = req.params;

  const customer = customersData.find((c) => c.customer_id === id);

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  res.json(customer);
};
