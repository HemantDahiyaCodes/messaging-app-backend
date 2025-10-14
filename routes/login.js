const loginRoute = require("express").Router();
const passport = require("../auth/localStrategy");

loginRoute.post("/", passport.authenticate("local", {session: false}), (req, res) => {
    const user = req.user;
    console.log("the user is: ", user);

    if(!user) {
        return res.status(401).json({message: "User doesn't exist"});
    }


    return res.json({success: true, cookie: user});
})

module.exports = loginRoute;