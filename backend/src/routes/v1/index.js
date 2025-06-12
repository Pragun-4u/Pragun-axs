import express from "express";
import { signup, login } from "../../controller/user-controller.js";
import { signUpAndLoginMiddleware } from "../../middleware/user-auth-middleware.js";

const router = express.Router();

router.post("/signup", signUpAndLoginMiddleware, signup);
router.post("/login", signUpAndLoginMiddleware, login);

export default router;
