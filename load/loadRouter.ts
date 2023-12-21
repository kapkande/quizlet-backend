import { Router, Request, Response } from "express";
import { loadController } from "./loadController";
import { authMiddleware } from "../middleweree/authMiddleware";
import { ruleMiddleweare } from "../middleweree/ruleMiddleweare";
const multer = require('multer');
const upload = multer();

const router: Router = Router();


router.post('/uploadIcon', ruleMiddleweare(['user', 'admin']), upload.single('icon'), loadController.uploadIcon);

module.exports = router;
