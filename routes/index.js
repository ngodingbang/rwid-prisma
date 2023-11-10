import userRouter from "./user.js";
import express from "express";

const router = express.Router();

router.use("/", userRouter);

export default router;
