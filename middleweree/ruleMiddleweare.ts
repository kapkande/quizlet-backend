import { config } from "../config";
const jwt = require('jsonwebtoken');

export function ruleMiddleweare(roles: string[]) {
    return function (req: any, res: any, next: any) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            // const token = req.headers.cookie.split('=')[1]
            const token = req.headers.tocen
            // console.log(token);
            // console.log(req.headers.tocen);
            console.log(req);
            if (!token) {
                return res.status(403).json("The user is not logged in");
                
            }

            const { permission: permission } = jwt.verify(token, config.secret);
            // console.log(roles);
            let hasRole = false;
            console.log(permission);
            // permission.forEach((role:string )=> {

            if (roles.includes(permission)) { hasRole = true }
            // });
            if (!hasRole) {
                return res.status(403).json("You don't have rights");
            }
            next()
        } catch (error) {
            return res.status(403).json("The user is not logged in");
        }
    }

}