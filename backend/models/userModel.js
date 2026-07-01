import db from "../config/db.js";

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO users (full_name,email,password,phone)
       VALUES (?,?,?,?)`,
      [
        user.full_name,
        user.email,
        user.password,
        user.phone,
      ],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};