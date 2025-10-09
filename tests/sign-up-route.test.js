const request = require("supertest");
const express = require("express");
const app = express();
const signUp = require("../routes/sign-up");

app.use("/", signUp);
app.use(express.json())

test("Sign up route works!", done => {
    request(app)
    .post("/")
    .type("form")
    .send({username: "deepti", password: "deepti"})
    .expect((res) => res.body.success === true ? true : false)
    .end(done);
})

test("User already exists", done => {
    request(app)
    .post("/")
    .type("form")
    .send({username: "hemant", password: "hemant_dahiya"})
    .expect((res) => res.body.message === "User already exists" ? true : false)
    .end(done);
})

test("Username can't be less than 3 characters", done => {
    request(app)
    .post("/")
    .type("form")
    .send({username: "", password: "hemant_dahiya"})
    .expect((res) => res.body.message === "Username and password cannot be empty or less than 3 characters")
    .end(done);
})