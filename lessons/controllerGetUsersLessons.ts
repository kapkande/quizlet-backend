import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import { connection } from "../connection";

export const controllerGetUsersLessons = async (req: any, res: any) => {
    const userName = `${req.params.userName}`
    connection.then(async (conn: any) => {
        try {
            const e: any = await conn.query(SQL.sqlForGetUsersLessons, userName);
            res.json(e[0]);
        } catch (error) {
            // console.log(error);
            // res.sendStatus(403)
            return res.status(403).json("Error getting lessons");
        }
    })
}