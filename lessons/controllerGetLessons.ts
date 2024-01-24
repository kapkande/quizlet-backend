import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const controllerGetLessons = async (req: any, res: any) => {
    console.log(req.headers.id);
    console.log(req.headers.permission);
    const sql = `SELECT * FROM data`
    connection.then((conn: mysql.Connection) => {
        conn.query(sql).then(([rows]: any) => {
            if (!rows) { res.sendStatus('404'); }
            try {
                res.json(rows);
            } catch (error) {
                console.log(error);
            }
        })
    });

}