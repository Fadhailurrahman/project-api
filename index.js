import express from "express";
import cors from "cors";

import customersRouter from "./routes/customers.js";
import analyticsRouter from "./routes/analytics.js";
import recommendRouter from "./routes/recommend.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/customers", customersRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/recommend", recommendRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is running successfully 🚀" });
});

export default app;
