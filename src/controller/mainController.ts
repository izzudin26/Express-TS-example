import IController from "./IController";
import { Request, Response } from "express";
const db = require("../../src/db/models");

class MainController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      let data = await db.BiodataTodo.findAll();
      return res.send(data);
    } catch (error) {
      return res.send({ message: error });
    }
  }
  async store(req: Request, res: Response): Promise<Response<any>> {
    let { first_name, last_name, age } = req.body;
    try {
      let store = await db.BiodataTodo.create({
        first_name,
        last_name,
        age,
      });
      return res.send({ message: "success", data: store });
    } catch (error) {
      return res.send({ message: error });
    }
  }
  get(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  destroy(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}

export default new MainController();
