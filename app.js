const express = require("express");
const passport = require("passport");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());

// Importing routes
const signUpRoute = require("./routes/sign-up");

app.use("/", signUpRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log("server started!");
})