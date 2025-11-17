import express from "express";
import cors from "cors";

import customersRouter from "./routes/customers.js";
import analyticsRouter from "./routes/analytics.js";
import recommendRouter from "./routes/recommend.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/customers", customersRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/recommend:id", recommendRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is running successfully 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
