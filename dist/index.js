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
const connection_1 = require("./connection");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRouter = require('./auth/authRouter');
const cors = require('cors');
const app = express();
const port = 3500;
app.use(cors({
    origin: ['http://bouqeros.online:8080', 'http://127.0.0.1:5500', 'http://localhost:5173']
}));
app.use("/auth", authRouter);
// app.post('/reg', async (req: any, res: any) => {
//     let hashedPassword = await bcrypt.hash(req.headers.password, 8);
//     const sqlForEnailCheak = "SELECT email FROM users WHERE email = ?";
//     const sqlForNameCheak = "SELECT userName FROM users WHERE userName = ?";
//     const sql = "INSERT INTO users SET ?";
//     const data = { userName: req.headers.name, email: req.headers.email, userPassword: hashedPassword, ownLessons: '{}' };
//     connection.then(async (conn: mysql.Connection) => {
//         try {
//            // Check if name already exists
//             let [nameRows]: any = await conn.query(sqlForNameCheak, data.userName);
//             if (nameRows.length > 0) {
//                 res.send('This name is already busy');
//                 return;
//             }
//             // Check if email already exists
//             let [emailRows]: any = await conn.query(sqlForEnailCheak, data.email);
//             if (emailRows.length > 0) {
//                 res.send('This email is already busy');
//                 return;
//             }
//             // Create account
//             await conn.query(sql, data);
//             res.send('Account created successfully');
//         } catch (error) {
//             console.log(error);
//             res.send('Error creating account');
//         }
//     })
// });
// app.post('/log', async (req: any, res: any) => {
//     const sqlForUserCheck = "SELECT * FROM users WHERE userName = ? OR email = ?";
//    const data = [req.headers.name, req.headers.password];
//     connection.then(async (conn: mysql.Connection) => {
//     try {
//       // Check if user exists
//       let [userRows]:any = await conn.query(sqlForUserCheck, data);
//       if (userRows.length === 0) {
//         res.send('Invalid username');
//         return;
//       }
//       // Check password
//       let match = await bcrypt.compare(req.headers.password, userRows[0].userPassword);
//       if (!match) {
//         res.send('Invalid password');
//         return;
//       }
//       // Login successful
//  	const token = jwt.sign({ id: req.header.id  }, config.secret, { expiresIn: '1h' });
//  	 res.cookie('token', token, { httpOnly: true });
//       res.send('Login successful');
//     } catch (error) {
//       console.log(error);
//       res.send('Error logging in');
//     }})
//   });
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
    // console.log(id);
    connection_1.connection.then((conn) => {
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
//get datas name and id
app.get('/dataNames', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT name, id FROM data `;
    connection_1.connection.then((conn) => {
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
// //get datas
app.get('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT * FROM data`;
    connection_1.connection.then((conn) => {
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
    connection_1.connection.then((conn) => {
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
