import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const registration = async (req: any, res: any) => {
    let hashedPassword = await bcrypt.hash(req.headers.password, 8);
   
    const data = { userName: req.headers.name, email: req.headers.email, userPassword: hashedPassword, ownLessons: '{}' };
    connection.then(async (conn: mysql.Connection) => {
        try {
           // Check if name already exists
            let [nameRows]: any = await conn.query(SQL.sqlForNameCheak, data.userName);
            if (nameRows.length > 0) {
                res.send('This name is already busy');
                return;
            }

            // Check if email already exists
            let [emailRows]: any = await conn.query(SQL.sqlForEnailCheak, data.email);
            if (emailRows.length > 0) {
                res.send('This email is already busy');
                return;
            }

            // Create account
            await conn.query(SQL.sqlForCreateUsers, data);
            res.send('Account created successfully');
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
            res.send('Error creating account');
        }
    })
}