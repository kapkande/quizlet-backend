import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const getUsers = async (req: any, res: any) => {
    connection.then(async (conn: any) => {
        try {
            const e: any = await conn.query(SQL.sqlForGetUsers);
            res.json(e[0]);
        } catch (error) {
            // console.log(error);
            // res.sendStatus(403)
            return res.status(403).json("Error getting accounts");
        }
    })
}