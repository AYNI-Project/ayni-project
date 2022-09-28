import { Pool } from "pg";
import { config } from "./config";

const url = config();

export const connection = () => {
  try {
    const client = new Pool({
      connectionString: url,
      ssl: { rejectUnauthorized: false },
    });
    console.log("Connected successfully to database server");
    if (client != undefined) {
      return client;
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
  }
};
