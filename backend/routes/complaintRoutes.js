import express from "express";
import {
  addComplaint,
  allComplaints,
} from "../controllers/complaintController.js";

const router = express.Router();

router.post("/", addComplaint);
router.get("/", allComplaints);

export default router;