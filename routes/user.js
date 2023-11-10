import { UserController } from "../controllers/UserController.js";
import { asyncHandler } from "../helpers.js";
import express from "express";

const router = express.Router();

router.get("/users", asyncHandler(UserController.index));
router.post("/users", asyncHandler(UserController.store));
router.get("/users/:username", asyncHandler(UserController.show));

export default router;
