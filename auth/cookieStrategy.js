const passport = require("passport");
const CookieStrategy = require("passport-cookie");
const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();

passport.use(new CookieStrategy(
    async function(token, done) {
        const user = await prisma.users.findUnique({where: token.username})

        if(!user) {
            return done(null, false);
        }

        return done(null, user);
    }
))

module.exports = passport;