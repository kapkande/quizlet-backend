import { Router, Request, Response } from "express";
import { authController } from "./authController";
import { authMiddleware } from "../middleweree/authMiddleware";
import { ruleMiddleweare } from "../middleweree/ruleMiddleweare";

const router: Router = Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.post('/users', ruleMiddleweare(['admin']), authController.getUsers);
router.post('/user', authMiddleware, authController.getUser);
module.exports = router;
