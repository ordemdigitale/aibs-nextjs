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
            link: "dfdfdfdf",
            videoid: "dfdfdf"
        },
        {
            title: "AFG Compétences : Recruter des talents à AIBS !",
            link: "ggpoglgkg",
            videoid: "dfdfdf"
        },
        {
            title: "Rédiger un CV percutant",
            link: "okokkok",
            videoid: "dfdfdf"
        },
        {
            title: "Dr. Ahmed TRAORE - DCH AFG Holding | PROJET AFG COMPETENCE",
            link: "nnhffgjfgfgfi",
            videoid: "dfdfdf"
        },
    ]).returning();
  } catch (error) {
    console.error("Error during migration videos data migration:", error);
    throw error;
  }
}