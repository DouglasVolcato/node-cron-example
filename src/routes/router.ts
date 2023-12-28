import express, { Request, Response } from "express";
import HomeController from "../controllers/home-controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  HomeController(req, res);
});

export default router;
