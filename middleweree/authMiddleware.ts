import { config } from "../congig";

const jwt = require('jsonwebtoken');

export function authMiddleware(req: any, res: any, next: any) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.cookies.tocen
        if (!token) {
            return res.sendStatus(403).json({ massage: "The user is not logged in" })
        }
        const decodedData = jwt.verify(token, config.secret);
        // console.log(decodedData);
        
        res.user = decodedData;
        next()
    } catch (error) {
        return res.sendStatus(403).json({ massage: "The user is not logged in" })
    }
}