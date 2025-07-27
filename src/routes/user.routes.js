import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

// router.post('/register',registerUser)
router.route("/register").post(registerUser);

export default router;
