import { Request, Response } from "express";

interface IController {
  index(req: Request, res: Response): Response;
  store(req: Request, res: Response): Response;
  get(req: Request, res: Response): Response;
  destroy(req: Request, res: Response): Response;
}

export default IController;
