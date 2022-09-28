import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const config = (): any => {
  const uri = process.env.POSTGRES_URL as string;
  return uri;
};
export const secret = process.env.SECRET || "";

