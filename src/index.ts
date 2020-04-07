import express, { Application, Request, Response } from "express";
import TodoRoute from "./route/route";
import morgan from "morgan";
import bodyParser from "body-parser";
const port: number = 8000;

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
  }

  protected routes(): void {
    this.app.use("/todo", TodoRoute);
  }
}

let app = new App().app;
app.listen(port, () => console.log(`running on port ${port}`));
