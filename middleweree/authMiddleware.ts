import { config } from "../congig";

const jwt = require('jsonwebtoken');

export function authMiddleware(req: any, res: any, next: any) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.cookies.tocen
        
        console.log(token + " token");
        if (!token) {
            return res.status(403).json( "The user is not logged in" );
        }
                const decodedData = jwt.verify(token, config.secret);
        console.log(decodedData);
        
        req.user = decodedData;
        next()
    } catch (error) {
        return res.status(403).json( "The user is not logged in" );
    }
}