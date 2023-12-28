import { Router, Request, Response } from "express";
import { ruleMiddleweare } from "../middleweree/ruleMiddleweare";
import { controllerUserPermission } from "./controllerUserPermission";


const router: Router = Router();


router.post('/userPermission', controllerUserPermission);

module.exports = router;
