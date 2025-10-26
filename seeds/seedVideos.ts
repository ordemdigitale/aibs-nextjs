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
          videoid: "qJJrmVi0aL8"
        },
        {
          title: "AFG Compétences : Recruter des talents à AIBS !",
          videoid: "oqZF-KgPSc8"
        },
        {
          title: "Rédiger un CV percutant",
          videoid: "JxlzWwIzj1M"
        },
        {
          title: "Dr. Ahmed TRAORE - DCH AFG Holding | PROJET AFG COMPETENCE",
          videoid: "Hbgi84c18ss"
        },
    ]).returning();
    console.log("✅ Videos data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration videos data migration:", error);
    throw error;
  }
}