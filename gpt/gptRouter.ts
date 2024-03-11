import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleweree/authMiddleware";

import { controller } from "./controller";


const router: Router = Router();

router.post('/gpt',  authMiddleware, controller);
module.exports = router;
