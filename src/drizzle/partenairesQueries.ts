import { cache } from "react";
import { eq, asc } from 'drizzle-orm';
import { db } from '@/drizzle/db';
import { partenaires } from '@/drizzle/schema';
import type { TPartners } from "@/drizzle/schema";

// Query to get all "Partenaires"
export const getAllPartenaires = cache(async (): Promise<TPartners[]> => {
  return await db.query.partenaires.findMany({
    orderBy: [asc(partenaires.id)],
  });
});
// Query to create a new "Partenaire"
export async function createPartenaire(data: Partial<TPartners>): Promise<TPartners> {
  const newPartenaire = await db.insert(partenaires).values(data as TPartners).returning();
  return newPartenaire[0];
};
// Query to update an existing "Partenaire"
export async function updatePartenaire(id: number, data: Partial<TPartners>): Promise<TPartners | null>{
  const updatedPartenaire = await db
    .update(partenaires)
    .set(data as TPartners)
    .where(eq(partenaires.id, id))
    .returning();
  return updatedPartenaire[0] || null;
}
// Query to delete a "Partenaire" by ID
export async function deletePartenaire(id: number): Promise<void> {
  await db
    .delete(partenaires)
    .where(eq(partenaires.id, id));
}