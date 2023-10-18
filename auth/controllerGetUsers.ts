import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const getUsers = async (req: any, res: any) => {
       connection.then(async (conn: any) => {
        try {
                           
            let e: any = await conn.query(SQL.sqlForGetUsers);
                //   console.log(emailRows);
            res.json(e);
        } catch (error) {
            console.log(error);
            // res.sendStatus(400)
            res.send('Error getting accounts');
        }
    })
}