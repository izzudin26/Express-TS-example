import IController from "./IController";
import { Request, Response } from "express";

let data: Array<any> = [
  {
    id: 1,
    nama: "ahmad",
    umur: 12,
  },
  {
    id: 2,
    nama: "Bambang",
    umur: 13,
  },
  {
    id: 3,
    nama: "Akira",
    umur: 15,
  },
];

class MainController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }
  store(req: Request, res: Response): Response {
    let { nama, umur } = req.body;
    data.push({ nama, umur });
    return res.send("Success store data");
  }
  get(req: Request, res: Response): Response {
    let { id } = req.params;
    let find = data.find((doc) => doc.id == id);
    return res.send(find);
  }
  destroy(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
}

export default new MainController();
