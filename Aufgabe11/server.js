"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { ParsedUrlQuery } from "querystring";
var Aufgabe11;
(function (Aufgabe11) {
    console.log("Server starten");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //let databaseUrl: string = "mongodb://localhost:8100";
    let databaseUrl = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/Test?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders = mongoClient.db("Test").collection("Students");
        orders.insert({ name: "Hubert", firstname: "Manuel", registration: "236008" });
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "//html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (path == "//json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            else if (path == "//A8") {
                _response.write(_request.url);
            }
        }
        _response.end();
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map