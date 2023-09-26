"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
// import * as mysql from 'mysql2/promise';
// import express from 'express';
// const cors = require('cors');
const app = express();
const port = 3500;
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('hell');
    }
    catch (error) {
        console.log(error);
    }
}));
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "kapkan",
//     database: "php-mysql",
//     password: "HX10ZhVF1D1Hpu8-"
// });
// //get data by id
// app.get('/data/:id', async (req: any, res: any) => {
//     const sql = `SELECT * FROM data WHERE id = ?`
//     const id = `${req.params.id}`
//     console.log(id);
//     connection.then((conn: mysql.Connection) => {
//         conn.query(sql, id).then(([rows]: any) => {
//             if (!rows[0]) { res.sendStatus('404'); }
//             try {
//                 res.json(rows[0]);
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     });
// })
// //get datas name and id
// app.get('/dataNames', async (req: any, res: any) => {
//     const sql = `SELECT name, id FROM data `
//     connection.then((conn: mysql.Connection) => {
//         conn.query(sql).then(([rows]: any) => {
//             if (!rows) { res.sendStatus('404'); }
//             try {
//                 res.json(rows);
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     });
// })
// //get datas
// app.get('/data', async (req: any, res: any) => {
//     const sql = `SELECT * FROM data`
//     connection.then((conn: mysql.Connection) => {
//         conn.query(sql).then(([rows]: any) => {
//             if (!rows) { res.sendStatus('404'); }
//             try {
//                 res.json(rows);
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     });
// })
// //get user by id
// app.get('/usersId/:id', async (req: any, res: any) => {
//     const sql = `SELECT * FROM users WHERE id = ?`
//     const id = `${req.params.id}`
//     connection.then((conn: mysql.Connection) => {
//         conn.query(sql, id).then(([rows]: any) => {
//             if (!rows[0]) { res.sendStatus('404'); }
//             try {
//                 res.json(rows[0]);
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     });
// })
// //get user by name
// app.get('/usersName/:name', async (req: any, res: any) => {
//     const sql = `SELECT * FROM users WHERE userName = ?`
//     const name = `${req.params.name}`
//     connection.then((conn: mysql.Connection) => {
//         conn.query(sql, name).then(([rows]: any) => {
//             if (!rows[0]) { res.sendStatus('404'); }
//             try {
//                 res.json(rows[0]);
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     });
// })
app.listen(port, () => {
    console.log(port + ' wos stared');
});
