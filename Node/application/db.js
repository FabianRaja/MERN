import { MongoClient } from "mongodb";

const connectionString="mongodb+srv://FabianRaja:fabi21052002@cluster0.npvlwo3.mongodb.net/";

async function dbConnection(){
      try {
            const client=new MongoClient(connectionString);
            await client.connect();
            console.log("Database Connected");
            return client;
      } catch (error) {
            console.log("Error in connecting Database",error)
      }
}

export const client = await dbConnection();
