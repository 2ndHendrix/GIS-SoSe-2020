import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { ParsedUrlQuery } from "querystring";


export namespace Aufgabe11 {
  // tslint:disable-next-line: class-name
  interface Orders {

    // tslint:disable-next-line: no-any
    [type: string]: string[] | undefined;
  }

  console.log("Server starten");
  let orders: Mongo.Collection;
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

 // let databaseUrl: string = "mongodb+srv://Administrator:Administrator@hannahnaha.dtfe1.mongodb.net/Test?retryWrites=true&w=majority";
  let databaseUrl: string = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/test?retryWrites=true&w=majority";


  //"mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/test?retryWrites=true&w=majority";
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
    console.log("hallo");
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    orders = mongoClient.db("Test").collection("Students");
    console.log("Database connection" + orders != undefined);
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("whaaazzzzuuup");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string = <string>url.pathname;
      if (path == "/send") {

        await handleSend(url);

      } else if (path == "/get") {

        await handleGet(_response);
      }
      //response abschließen
      _response.end();
    }
  }
  async function handleSend(_url: Url.UrlWithParsedQuery): Promise<void> {
    console.log("Übermittle die Daten an die DB");
    console.log(_url.query);
    orders.insertOne(_url.query);
  }

  async function handleGet(_response: Http.ServerResponse): Promise<void> {
    console.log("Daten übermittelt");
    let ordersArray: Orders[] = await orders.find().toArray();
    _response.write(JSON.stringify(ordersArray));
  }


}