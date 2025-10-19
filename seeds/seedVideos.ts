// seeds/seedVideos.ts
// Seed script to populate the videos table with initial data
import { db } from "@/drizzle/db";
import { videos } from "@/drizzle/schema";

export async function migrateVideosData() {
  try {
    // Insert videos data
    const mainVideos = await db.insert(videos).values([
        {
            title: "Partenariat avec ATLANTIC GROUP : Intervention du DG M. ABISSA Kouakou",
            link: ""
        },
        {
            title: "AFG Compétences : Recruter des talents à AIBS !",
            link: ""
        },
        {
            title: "Rédiger un CV percutant",
            link: ""
        },
        {
            title: "Dr. Ahmed TRAORE - DCH AFG Holding | PROJET AFG COMPETENCE",
            link: ""
        },
    ]).returning();
  } catch (error) {
    console.error("Error during migration videos data migration:", error);
    throw error;
  }
}