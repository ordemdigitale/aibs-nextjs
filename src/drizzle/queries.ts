import { cache } from "react";
import { db, users, categories } from "./db";

export const getUsers = cache (async () => {
  const data = await db.select().from(users).all();

  return data;
});

export const getCategories = cache(async () => {
  const data = await db.select().from(categories).all();
  return data;
});