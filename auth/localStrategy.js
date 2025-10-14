const passport = require("passport");
const LocalStrategy = require("passport-local");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.users.findFirst({ where: { username } });

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const matchPassword = await bcrypt.compare(password, user.password);

      if (!matchPassword) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

module.exports = passport;
