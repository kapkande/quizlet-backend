import { Router, Request, Response } from "express";
// import { loadController } from "./loadController";
// import { authMiddleware } from "../middleweree/authMiddleware";
import { ruleMiddleweare } from "../middleweree/ruleMiddleweare";
import { uploadIcon } from "./controllerUploadIcon";
import { connection } from "../connection";
import { SQL } from "../SQL";
import * as mysql from 'mysql2/promise';
import { authMiddleware } from "../middleweree/authMiddleware";
import { getIcon } from "./getIcon";

const router: Router = Router();

// interface MyRequest extends Request {

//     iconSrc: string
//     user: IUser
// }
//   interface IUser {
//     id: number
//     userName: string,
//     permission: string,
//     iat: number,
//     exp: number
// }
router.post('/uploadIcon', authMiddleware, uploadIcon, (req: any, res) => {
    res.json({ message: 'File uploaded successfully' });
    // connection.then(async (conn: mysql.Connection) => {
    //     try {
    //         const id = req.user.id
    //         const src = req.iconSrc

    //         await conn.query(SQL.sqlForUsersIcon, [src, id])
            
    //         res.json({ message: 'File uploaded successfully' });

    //     } catch (error) {
    //         console.log(error);
    //         res.sendStatus(400)
    //     }
    // })
}
);
router.get('/icon/*', getIcon)

module.exports = router;