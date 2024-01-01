import { Router } from "express";
import passport from "passport";
import { isAuthenticated } from "../../utils/middlewares";
import { getGuildsController } from "../../controllers/guilds";

const router = Router();

router.get("/", isAuthenticated, getGuildsController);

export default router;
