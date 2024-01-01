import { Router } from "express";
import { isAuthenticated } from "../../utils/middlewares";
import { sendMessage } from "../..";

const router = Router();

router.get("/rawMessage", async (req, res) => {
  const messageContent = req.query.content as string;
  const guildChannel = req.query.channel as string;
  await sendMessage(messageContent, guildChannel);
  res.sendStatus(200);
});

export default router;
