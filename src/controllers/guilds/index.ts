import { Request, Response } from "express";
import { user } from "../../database/schemas/user";
import { getMutualGuildsService } from "../../services/guilds/guildsService";

export async function getGuildsController(req: Request, res: Response) {
  const user = req.user as user;
  try {
    const data = await getMutualGuildsService(user.id);
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}
