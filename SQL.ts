export const SQL = {
    sqlForEnailCheak: "SELECT email FROM users WHERE email = ?",
    sqlForNameCheak: "SELECT userName FROM users WHERE userName = ?",
    sqlForCreateUsers: "INSERT INTO users SET ?",
    sqlForUserCheck: "SELECT * FROM users WHERE userName = ? OR email = ?",
}