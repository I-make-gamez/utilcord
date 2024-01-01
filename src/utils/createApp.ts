import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { config } from "dotenv";
import routes from "../routes";
import store from "connect-mongo";

config();
require("../stratagies/discord");

function createApp(): Express {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  app.use(
    session({
      secret: "NDSDSDLLGCDUSIDHUADUHL",
      resave: false,
      saveUninitialized: false,
      cookie: {
        // maxAge = 1 month (30d)
        maxAge: 1000 * 60 * 60 * 24 * 30,
      },
      store: store.create({ mongoUrl: process.env.MONGODBURL }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => setTimeout(() => next(), 1000));

  app.use("/api", routes);

  return app;
}

export default createApp;
