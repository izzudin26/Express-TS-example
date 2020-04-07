"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route/route"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = 8000;
class App {
    constructor() {
        this.app = express_1.default();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use(morgan_1.default("dev"));
    }
    routes() {
        this.app.use("/todo", route_1.default);
    }
}
let app = new App().app;
app.listen(port, () => console.log(`running on port ${port}`));
