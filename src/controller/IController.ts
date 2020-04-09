import { Request, Response } from "express";

interface IController {
  index(req: Request, res: Response): Promise<Response>;
  store(req: Request, res: Response): Promise<Response>;
  get(req: Request, res: Response): Promise<Response>;
  destroy(req: Request, res: Response): Promise<Response>;
}

export default IController;
