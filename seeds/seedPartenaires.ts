// seeds/seedPartenaires.ts
// Seed script to populate the partenaires table with initial data
import { db } from "@/drizzle/db";
import { partenaires } from "@/drizzle/schema";

export async function migratePartenairesData() {
  try {
    // Insert partenaires data
    const postsData = await db.insert(partenaires).values([
      { logo: "/partenaires/AFG-HOLDING-LOGO.png", name: "AFG" },
      { logo: "/partenaires/logo-siteweb10.png", name: "Banque Atlantique" },
      { logo: "/partenaires/logo-siteweb3.png", name: "CNPS" },
      { logo: "/partenaires/logo-siteweb12.png", name: "logo" },
      { logo: "/partenaires/logo-ebs.png", name: "ebs" },
      { logo: "/partenaires/logo-supemir.jpeg", name: "logo" },
      { logo: "/partenaires/logo-cdp.jpg", name: "copar" },
      { logo: "/partenaires/logo-siteweb13.png", name: "logo" },
    ]).returning();
    
  } catch (error) {
    console.error("Error during migration of partenaires data: ", error);
    throw error;
  }
}

