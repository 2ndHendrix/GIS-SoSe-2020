import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { ParsedUrlQuery } from "querystring";


export namespace Aufgabe11 {
  console.log("Server starten");

  // tslint:disable-next-line: class-name
  interface orders {

    // tslint:disable-next-line: no-any
    [type: string]: string | string[] | undefined;
  }

  let databaseUrl: string = "mongodb+srv://2ndHendrix:Hendrix1994@gis-sose-2020.tbx6g.mongodb.net/Test?retryWrites=true&w=majority";

  console.log("Server starten");
  let orders: Mongo.Collection;
  //port Vairable erstellen und port zuweisen
  let port: number = Number(process.env.PORT);
  //port überprüfen und gegebenfalls setzen
  if (!port)
    port = 8100;


  connectToDatabase(databaseUrl);
  startServer(port);

  function startServer(_port: number | string): void {
    //Server variable erstellen
    let server: Http.Server = Http.createServer();
    console.log("server starting, port:" + _port);
    //handler hinzufügen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server soll auf port hören und schauen ob es dort anfragen gibt.
    server.listen(_port);
  }

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    orders = mongoClient.db("Test").collection("Students");
    console.log("Database connection" + orders != undefined);
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      if (url.pathname == "/send") {
        //In DB speichern
        //storeOrder(q.query);

        //let eintrag: Order = q.query; (heute)
        orders.insertOne(q.query);

      } else {
        //_response.write(await retrieveOrders());
        _response.write(JSON.stringify(await orders.find().toArray()));
      }
    }
    //response abschließen
    _response.end();
  }
}