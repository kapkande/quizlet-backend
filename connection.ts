import * as mysql from 'mysql2/promise';
export const connection = mysql.createConnection({
    host: "89.111.140.27",
    user: "kap",
    database: "new_database",
    password: "C-*TUZ3Huv"
});