"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrüfungsaufgabeGiS = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { ParsedUrlQuery } from "querystring";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    console.log("Server starten");
    let receivedData;
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    // let databaseUrl: string = "mongodb://localhost:27018";
    let databaseUrl = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/Eisladen?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        //Server variable erstellen
        let server = Http.createServer();
        console.log("server starting, port:" + _port);
        //handler hinzufügen
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        //server soll auf port hören und schauen ob es dort anfragen gibt.
        server.listen(_port);
        _port = Number(process.env.PORT);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Eisladen").collection("Bestellungen");
        console.log("Database connection" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/send") {
                console.log(url.query);
                console.log("if und so");
                orders.insertOne(url.query);
            }
            else if (path == "/get") {
                await receiveDatas(_response);
            }
            //response abschließen
            _response.end();
            console.log("server Response biaaatch");
        }
    }
    async function receiveDatas(_response) {
        console.log("was auch immer");
        //tslint:disable-next-line: no-any
        receivedData = await orders.find().toArray();
        for (let index = 0; index <= receivedData.length; index++) {
            if (receivedData[index]) {
                let current = receivedData[index];
                for (let key in current) {
                    _response.write(key + ": " + JSON.stringify(current[key]) + "<br>");
                }
                _response.write("<br>");
            }
        }
    }
})(PrüfungsaufgabeGiS = exports.PrüfungsaufgabeGiS || (exports.PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=server.js.map