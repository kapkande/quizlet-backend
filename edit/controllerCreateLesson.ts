import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const controllerCreateLesson = async (req: any, res: any) => {
    console.log(req.headers.data);
    console.log(req.user);
    //   connection.then(async (conn: mysql.Connection) => {
    //     try {
    //         const e: any = await conn.query(SQL.sqlForGetUser, [req.headers.id, req.headers.permission]);
    //         res.json(e[0]);
    //         console.log(req.headers);headers.user

    //     } catch (error) {
    //         console.log(error);
    //         res.json({text:'Error logging in'});
    //     }
    // })
}