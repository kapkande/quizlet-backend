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
import { getSettingSvg } from "./getSettingSvg";

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
}
);
router.get('/icon/*', getIcon)
router.get('/settingSvg', getSettingSvg)
module.exports = router;