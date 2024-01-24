import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";

export const controllerGetLesson = async (req: any, res: any) => {
    const sql = `SELECT * FROM data WHERE id = ?`
    const id = `${req.params.id}`
    connection.then((conn: mysql.Connection) => {
        conn.query(sql, id).then(([rows]: any) => {
            if (!rows[0]) { res.sendStatus('404'); }
            try {
                res.json(rows[0]);
            } catch (error) {
                console.log(error);
            }
        })
    });
}