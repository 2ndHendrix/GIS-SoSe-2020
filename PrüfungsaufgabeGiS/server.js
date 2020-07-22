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
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/test?retryWrites=true&w=majority";
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
        orders = mongoClient.db("Test").collection("Students");
        console.log("Database connection" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
                await handleHTML(_response);
            }
            else if (path == "/send") {
                await handleSend(url);
            }
            else if (path == "/get") {
                await handleGet(_response);
            }
            //response abschließen
            _response.end();
        }
    }
    async function handleSend(_url) {
        console.log(_url.query);
        orders.insertOne(_url.query);
    }
    async function handleGet(_response) {
        let ordersArray = await orders.find().toArray();
        _response.write(JSON.stringify(ordersArray));
    }
    async function handleHTML(_response) {
        let htmlArray = await orders.find().toArray();
        _response.write(JSON.stringify(htmlArray));
        //let response: Response = await fetch(_response: Http.ServerResponse);
        let rückgabeText = await _response.find().toArray();
        let serverResponse = document.getElementById("serverRückgabe");
        serverResponse.innerHTML = rückgabeText;
    }
})(PrüfungsaufgabeGiS = exports.PrüfungsaufgabeGiS || (exports.PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=server.js.map