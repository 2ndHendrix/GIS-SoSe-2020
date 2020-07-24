import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { Http2ServerResponse } from "http2";

export namespace PrüfungsaufgabeGiS {
  // tslint:disable-next-line: class-name
  interface Orders {

    // tslint:disable-next-line: no-any
    [type: string]: string[] | undefined;
  }

  console.log("Server starten");
  let receivedData: Orders[];
  let orders: Mongo.Collection;
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;


  // let databaseUrl: string = "mongodb://localhost:27018";

  let databaseUrl: string = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/Eisladen?retryWrites=true&w=majority";

  startServer(port);
  connectToDatabase(databaseUrl);

  function startServer(_port: number | string): void {
    //Server variable erstellen
    let server: Http.Server = Http.createServer();
    console.log("server starting, port:" + _port);
    //handler hinzufügen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server soll auf port hören und schauen ob es dort anfragen gibt.
    server.listen(_port);
    _port = Number(process.env.PORT);
  }

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    orders = mongoClient.db("Eisladen").collection("Bestellungen");
    console.log("Database connection" + orders != undefined);
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string = <string>url.pathname;
 
      if (path == "/delete") {
        orders.drop();
        
        }
      else if (path == "/send") {
        console.log(url.query);
        orders.insertOne(url.query);
      }
      else if (path == "/get") {
        await receiveDatas(_response);
      }
      //response abschließen
      _response.end();
    }
  }

  async function receiveDatas(_response: Http.ServerResponse): Promise<void> {
    //tslint:disable-next-line: no-any
    receivedData = await orders.find().toArray();
    for (let index: number = 0; index <= receivedData.length; index++) {

      if (receivedData[index]) {

        let current: Orders = <Orders>receivedData[index];
        for (let key in current) {
          _response.write(key + ": " + JSON.stringify(current[key]) + "<br>");
        }
        _response.write("<br>");
      }
    }
  }
}


