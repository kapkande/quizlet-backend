import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const controllerGetUsersLesson = async (req: any, res: any) => {

    const userName = `${req.params.userName}`;
    const id = `${req.params.id}`;

    connection.then(async (conn: any) => {
        try {
            const e: any = await conn.query(SQL.sqlForGetUsersLesson, [id, userName]);
            // console.log(e[0].length);
            // console.log(e[0]);
            if (e[0].length == 0) {
                res.json(`user ${userName} doesn't have this lesson`
                );
            } else {
                res.json(e[0]);
            }


        } catch (error) {
            // console.log(error);
            // res.sendStatus(403)
            return res.status(403).json("Error getting lesson");
        }
    })
}