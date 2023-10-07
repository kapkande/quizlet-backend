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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mysql = require("mysql2/promise");
// import express from 'express';
const cors = require('cors');
const app = express();
const port = 3500;
app.use(cors({
    origin: 'http://bouqeros.online:8080'
}));
const connection = mysql.createConnection({
    host: "89.111.140.27",
    user: "kap",
    database: "new_database",
    password: "C-*TUZ3Huv"
});
// app.get('/', async (req: any, res: any) => {
//     try {
//         res.send('hell');
//     } catch (error) {
//         console.log(error);
//     }
// })
// //get data by id
app.get('/data/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT * FROM data WHERE id = ?`;
    const id = `${req.params.id}`;
    console.log(id);
    connection.then((conn) => {
        conn.query(sql, id).then(([rows]) => {
            if (!rows[0]) {
                res.sendStatus('404');
            }
            try {
                res.json(rows[0]);
            }
            catch (error) {
                console.log(error);
            }
        });
    });
}));
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
app.get('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT * FROM data`;
    connection.then((conn) => {
        conn.query(sql).then(([rows]) => {
            if (!rows) {
                res.sendStatus('404');
            }
            try {
                res.json(rows);
            }
            catch (error) {
                console.log(error);
            }
        });
    });
}));
// //get user by id
app.get('/usersId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT * FROM users WHERE id = ?`;
    const id = `${req.params.id}`;
    connection.then((conn) => {
        conn.query(sql, id).then(([rows]) => {
            if (!rows[0]) {
                res.sendStatus('404');
            }
            try {
                res.json(rows[0]);
            }
            catch (error) {
                console.log(error);
            }
        });
    });
}));
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
