import { Router, Request, Response } from "express";
import { authController } from "./authController";
const router: Router = Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/users', authController.getUsers);

module.exports = router;
