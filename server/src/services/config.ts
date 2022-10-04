import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const config = (): any => {
  const uri = process.env.HEROKU_POSTGRESQL_YELLOW_URL as string;
  return uri;
};
export const secret = process.env.SECRET || "";