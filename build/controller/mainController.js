"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
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
class MainController {
    index(req, res) {
        return res.send(data);
    }
    store(req, res) {
        let { nama, umur } = req.body;
        data.push({ nama, umur });
        return res.send("Success store data");
    }
    get(req, res) {
        let { id } = req.params;
        let find = data.find((doc) => doc.id == id);
        return res.send(find);
    }
    destroy(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new MainController();
