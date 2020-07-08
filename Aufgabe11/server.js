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
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb://localhost:27017";
    //"mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/test?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    startServer(port);
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
        console.log("hallo");
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("test").collection("Students");
        console.log("Database connection" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("whaaazzzzuuup");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                await handleSend(url);
            }
            else if (url.pathname == "/get") {
                await handleGet(url);
            }
            //response abschließen
            _response.end();
        }
    }
    async function handleSend(_url) {
        console.log("Übermittle die Daten an die DB");
        console.log(_url.query);
        orders.insertOne(_url.query);
    }
    async function handleGet(_response) {
        let orders = await orders.find().toArray();
        _response.write(JSON.stringify(ordersArray));
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map