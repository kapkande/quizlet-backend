import { SQL } from "../SQL";
import { connection } from "../connection";

export const getUser = async (req: any, res: any) => {
    connection.then(async (conn: any) => {
        try {
            const id = req.user.id
            const e: any = await conn.query(SQL.sqlForGetUser, id);
            return res.json(e[0][0]);
        } catch (error) {
            console.log(error);
            // res.sendStatus(400)
            return res.status(403).json( "Error getting account" );        }
    })
}