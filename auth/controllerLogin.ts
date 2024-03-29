import { SQL } from "../SQL";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import * as mysql from "mysql2/promise";
import { connection } from "../connection";
import { config } from "../config";
import { getGigaToken } from "../gpt/getGigaToken";

export const login = async (req: any, res: any) => {
  const userName = req.headers.name;
  connection.then(async (conn: mysql.Connection) => {
    try {
      // Check if user exists
      let [userRows]: any = await conn.query(SQL.sqlForUserCheck, userName);
      if (userRows.length === 0) {
        res.json({ text: "Invalid username" });
        return;
      }

      // Check password
      let match = await bcrypt.compare(
        req.headers.password,
        userRows[0].userPassword
      );
      if (!match) {
        res.json({ text: "Invalid password" });
        return;
      }
    //   console.log(userRows[0].permission);
      // Login successful
      const token = jwt.sign(
        {
          id: userRows[0].id,
          userName: userRows[0].userName,
          permission: userRows[0].permission,
        },
        config.secret,
        { expiresIn: "1h" }
      );
      const gToken = await getGigaToken();

      // res.cookie('token', token, { httpOnly: true });
      res.json({ token, gToken, text: "Login successful" });
      // res.send('Login successful');
      // res.cookie('cookieName',token, { maxAge: 900000, httpOnly: true });
    } catch (error) {
      console.log(error);
      res.json({ text: "Error logging in" });
    }
  });
};
