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
    // let databaseUrl: string = "mongodb+srv://Administrator:Administrator@hannahnaha.dtfe1.mongodb.net/Test?retryWrites=true&w=majority";
    let databaseUrl = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/test?retryWrites=true&w=majority";
    //"mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/test?retryWrites=true&w=majority";
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
        console.log("hallo");
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
        console.log("whaaazzzzuuup");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/send") {
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
        console.log("Übermittle die Daten an die DB");
        console.log(_url.query);
        orders.insertOne(_url.query);
    }
    async function handleGet(_response) {
        console.log("Daten übermittelt");
        let ordersArray = await orders.find().toArray();
        _response.write(JSON.stringify(ordersArray));
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map