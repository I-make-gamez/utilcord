import passport from "passport";
import { Strategy, Profile } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
import user from "../database/schemas/user";

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const member = await user.findById(id);
    return member ? done(null, member) : done(null, null);
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENTID!,
      clientSecret: process.env.CLIENTSECRET!,
      callbackURL: process.env.REDIRECTURL,
      scope: ["identify", "email", "guilds"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      const member = await user.findOneAndUpdate(
        { Id: profile.id },
        { accessToken, refreshToken },
        { new: true }
      );
      console.log(member);
      if (member) return done(null, member);

      const newUser = new user({
        Id: profile.id,
        accessToken,
        refreshToken,
      });
      const newMember = await newUser.save();
      return done(null, newMember);
    }
  )
);
