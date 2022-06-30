import { MongoClient, Db } from "mongodb";
import settings from "../config/settings";

let client: MongoClient;
let INSTANCE: Db | null = null;

async function getDatabase(): Promise<Db> {
  if (!INSTANCE) {
    client = new MongoClient(settings.dbURI);
    await client.connect();
    INSTANCE = client.db("chronicles");
  }

  return INSTANCE;
}

export default getDatabase;
