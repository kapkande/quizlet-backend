import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";
import { config } from "../config";

export const uploadIcon = async (req: any, res: any) => {
    console.log(req.body);
    connection.then(async (conn: mysql.Connection) => {
        try {
            return res.json('asd');
          
        } catch (error) {
            console.log(error);
            res.json({text:'Error logging in'});
        }
    })
}