import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleweree/authMiddleware";

import { controllerGetLessons } from "./controllerGetLessons";
import { controllerGetLesson } from "./controllerGetLesson";
import { controllerGetUsersLessons } from "./controllerGetUsersLessons";
import { controllerGetUsersLesson } from "./controllerGetUsersLesson";


const router: Router = Router();

router.get('/',  controllerGetLessons);
router.get('/:id',  controllerGetLesson);
router.get('/user/:userName',  controllerGetUsersLessons);
router.get('/user/:userName/:id',  controllerGetUsersLesson);
module.exports = router;
