import IController from "./IController";
import { Request, Response, response } from "express";
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

  async store(req: Request, res: Response): Promise<Response> {
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

  async get(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;
    try {
      let data = await db.BiodataTodo.findOne({
        where: {
          id: id,
        },
      });
      return res.send(data);
    } catch (error) {
      return res.send({ message: error });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;
    try {
      let destroy = await db.BiodataTodo.destroy({
        where: {
          id,
        },
      });
      return res.send({ message: "success" });
    } catch (error) {
      return res.send({ message: error });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;
    let { first_name, last_name, age } = req.body;
    try {
      let update = await db.BiodataTodo.update(
        { first_name, last_name, age },
        { where: { id } }
      );
      return res.send({ message: "success", data: update });
    } catch (error) {
      return res.send({ message: error });
    }
  }
}

export default new MainController();
