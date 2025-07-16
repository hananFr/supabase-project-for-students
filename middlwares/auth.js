import { login } from "../services/users.service.js";

 const auth = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await login(username, password);
    next();
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Server Internal Error');
  }
}
export default auth;
