import { Router, Request, Response } from "express";
import IRouter from "./routeInterface";
import Controller from "../controller/mainController";

class mainRoute implements IRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes(): void {
    this.router.get("/", Controller.index);
    this.router.get("/:id", Controller.get);
    this.router.post("/", Controller.store);
    this.router.delete("/:id", Controller.destroy);
    this.router.put("/:id", Controller.update);
  }
}

export default new mainRoute().router;
