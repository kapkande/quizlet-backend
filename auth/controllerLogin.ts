import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";
import { config } from "../congig";

export const login = async (req: any, res: any) => {
    const data = [req.headers.name, req.headers.password];
    connection.then(async (conn: mysql.Connection) => {
        try {
            // Check if user exists
            let [userRows]: any = await conn.query(SQL.sqlForUserCheck, data);
            if (userRows.length === 0) {
                res.send('Invalid username');
                return;
            }

            // Check password
            let match = await bcrypt.compare(req.headers.password, userRows[0].userPassword);
            if (!match) {
                res.send('Invalid password');
                return;
            }

            // Login successful
            const token = jwt.sign({ id: req.header.id  }, config.secret, { expiresIn: '1h' });
            // res.cookie('token', token, { httpOnly: true });
            res.json({token})
            // res.send('Login successful');
        } catch (error) {
            console.log(error);
            res.send('Error logging in');
        }
    })
}