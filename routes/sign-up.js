const signUpRoute = require("express").Router();
const signUpController = require("../controllers/sign-up-controller");

signUpRoute.post("/", signUpController.signUp);

module.exports = signUpRoute;