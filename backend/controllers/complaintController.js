import {
  createComplaint,
  getComplaints,
} from "../models/complaintModel.js";

export const addComplaint = async (req, res) => {
  try {
    await createComplaint(req.body);

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const allComplaints = async (req, res) => {
  try {
    const complaints = await getComplaints();

    res.json({
      success: true,
      complaints,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};