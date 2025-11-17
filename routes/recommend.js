import express from "express";
import { getRecommendation } from "../controllers/recommendController.js";

const router = express.Router();

router.get("/:id", getRecommendation);

export default router;
