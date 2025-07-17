// Initialize the connection (Initialize the driver)
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";
import dotenv from "dotenv";

dotenv.config();

const sqlite = new Database(process.env.DB_FILE_NAME);
export const db = drizzle(sqlite, { schema });
export * from "./schema";
