import db from "../config/db.js";

export const createComplaint = (complaint) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO complaints
      (full_name,email,subject,description)
      VALUES (?,?,?,?)
    `;

    db.query(
      sql,
      [
        complaint.full_name,
        complaint.email,
        complaint.subject,
        complaint.description,
      ],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

export const getComplaints = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM complaints ORDER BY id DESC", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};