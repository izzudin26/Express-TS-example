"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainController_1 = __importDefault(require("../controller/mainController"));
class mainRoute {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", mainController_1.default.index);
        this.router.get("/:id", mainController_1.default.get);
        this.router.post("/", mainController_1.default.store);
    }
}
exports.default = new mainRoute().router;
