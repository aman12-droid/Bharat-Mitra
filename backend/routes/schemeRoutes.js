import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", (req, res) => {

  const sql = "SELECT * FROM schemes";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
      });
    }

    res.json(result);

  });

});

export default router;