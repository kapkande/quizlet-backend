import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";
import { config } from "../config";

export const controllerUserPermission = async (req: any, res: any) => {
    console.log(req.headers.id);
    console.log(req.headers.permission);
    connection.then(async (conn: mysql.Connection) => {
        try {
            const e: any = await conn.query(SQL.sqlForGetUser, [req.headers.id, req.headers.permission]);
            res.json(e[0]);
            console.log(req.headers);

        } catch (error) {
            console.log(error);
            res.json({text:'Error logging in'});
        }
    })
}