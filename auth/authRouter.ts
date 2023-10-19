import { Router, Request, Response } from "express";
import { authController } from "./authController";
import { authMiddleware } from "../middleweree/authMiddleware";

const router: Router = Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/users',authMiddleware, authController.getUsers);
router.get('/user',authMiddleware, authController.getUser);
module.exports = router;
