import { Router, Request, Response } from "express";
import { loadController } from "./loadController";
import { authMiddleware } from "../middleweree/authMiddleware";
import { ruleMiddleweare } from "../middleweree/ruleMiddleweare";

const router: Router = Router();


router.post('/uploadIcon', ruleMiddleweare(['user', 'admin']), loadController.uploadIcon);

module.exports = router;
