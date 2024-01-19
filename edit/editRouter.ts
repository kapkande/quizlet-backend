import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleweree/authMiddleware";
import { controllerUserPermission } from "./controllerUserPermission";
import { controllerCreateLesson } from "./controllerCreateLesson";


const router: Router = Router();


router.post('/userPermission', controllerUserPermission);
router.post('/createLesson',  authMiddleware, controllerCreateLesson);
module.exports = router;
