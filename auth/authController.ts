import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";
import { config } from "../congig";
import { registration } from "./controllerRegistration";
import { login } from "./controllerLogin";
import { getUsers } from "./controllerGetUsers";


export const authController = {
  registration: registration,
  login: login,
  getUsers: getUsers

}