import { registration } from "./controllerRegistration";
import { login } from "./controllerLogin";
import { getUsers } from "./controllerGetUsers";
import { getUser } from "./controllerGetUser";


export const authController = {
  registration: registration,
  login: login,
  getUsers: getUsers,
  getUser: getUser,
}