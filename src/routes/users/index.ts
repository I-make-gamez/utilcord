import { Router } from "express";
import { isAuthenticated } from "../../utils/middlewares";

const router = Router();

router.get("/me", isAuthenticated, (req, res) => {
  res.status(200).send(true);
});

export default router;
