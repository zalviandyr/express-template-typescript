import express, { Request, Response } from "express";
import HomeController from "@controllers/HomeController";

const router = express.Router();
class Route {
  init() {
    return [this.get("/", (req, res) => new HomeController(req, res).index())];
  }

  private get(path: string, handler: (req: Request, res: Response) => void) {
    return router.get(path, handler);
  }
}

export default Route;
