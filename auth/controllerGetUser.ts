import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const getUser = async (req: any, res: any) => {
    connection.then(async (conn: any) => {
        try {
            
            console.log(req);
            // const e: any = await conn.query(SQL.sqlForGetUser, id);

            res.json('d');
        } catch (error) {
            console.log(error);
            // res.sendStatus(400)
            res.send('Error getting accounts');
        }
    })
}