import { Request, Response } from "express";

export default function HomeController(req: Request, res: Response) {
  return res.json({ message: "App working!" });
}
