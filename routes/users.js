import express from "express";
import { login } from "../services/users.service.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    await login(username, password);
    res.status(200).send('Login Successful')
  } catch (err) {
    res.status(422).send("Wrong username or password");
  }
});

export default router