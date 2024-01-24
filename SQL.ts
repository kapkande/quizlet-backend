export const SQL = {
    sqlForEnailCheak: "SELECT email FROM users WHERE email = ?",
    sqlForNameCheak: "SELECT userName FROM users WHERE userName = ?",
    sqlForCreateUsers: "INSERT INTO users SET ?",
    sqlForUserCheck: "SELECT * FROM users WHERE userName = ?",
    sqlForGetUsers: "SELECT * FROM users",
    sqlForGetUser: "SELECT * FROM users WHERE id = ?",
    sqlForUsersIcon: "UPDATE `users` SET `icon` = ? WHERE `users`.`id` = ?",
    sqlForCreateOwnLessons: "INSERT INTO `ownLessons` (`userName`, `lessons`) VALUES (?, ?);",
    // sqlForUpdateOwnLessons: "UPDATE `ownLessons` SET `lessons` = '?' WHERE `ownLessons`.`id` = ?;",
    // sqlForGetOwnLessons: "SELECT * FROM ownLessons WHERE id = 1;"
    sqlForGetUsersLessons: "SELECT * FROM `ownLessons` WHERE `userName` LIKE ?",
    sqlForGetUsersLesson: "SELECT * FROM ownLessons WHERE id = ? AND userName = ?",

}