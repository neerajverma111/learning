const express = require("express");
const router = express.Router();
const { UserServices } = require("./user.services");
let obj = new UserServices();

router.post("/signUp", async (req, res) => {
  const result = await obj.SignIn(req);
  if (result == true) res.status(201).send("Sign-Up Successfully");
  else res.status(404).send("Sign-Up Failed or User already exist");
});

router.post("/login", async (req, res) => {
  const result = await obj.LogIn(req);
  if(result) res.status(201).send("Login Successfully");
  else res.status(404).send("Login Failed");
});

module.exports = { router };
