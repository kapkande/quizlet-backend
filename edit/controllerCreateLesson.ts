import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const controllerCreateLesson = async (req: any, res: any) => {
    // console.log(req.headers.data);
    // console.log(req.user);
    connection.then(async (conn: mysql.Connection) => {
        try {
            const ec: any = await conn.query(SQL.sqlForCreateOwnLessons, [req.user.userName, req.headers.data]).then(() => {
                res.json('Lesson created successfully');
            })
        } catch (error) {
            console.log(error);
            res.json({ text: 'Error logging in' });
        }
    })
}