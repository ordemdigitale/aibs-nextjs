// scripts/seed.ts
// Mogration scripts to populate the db with initial data
import { db } from "@/drizzle/db";
import { navLinks, subLinks, nestedLinks } from "@/drizzle/schema";
//import { eq } from "drizzle-orm";

export async function migrateNavData() {
  try {
    // Insert main navigation links
    const mainNavs = await db.insert(navLinks).values([
      { name: "L'école", slug: 'l-ecole', order: 1 },
      { name: 'Programmes', slug: 'programmes', order: 2 },
      { name: 'Bibliothèque numérique', slug: 'bibliotheque-numerique', order: 3 },
      { name: 'E-Learning', slug: 'e-learning', order: 4 }
    ]).returning();

    // Find the IDs for our main nav items
    const lecoleId = mainNavs.find(nav => nav.name === "L'école")?.id;
    const programmesId = mainNavs.find(nav => nav.name === 'Programmes')?.id;

    if (!lecoleId || !programmesId) {
      throw new Error('Failed to retrieve main navigation IDs')
    }

    // Insert sub-links for "L'école"
    const lecoleSubLinks = await db.insert(subLinks).values([
      { name: 'Découvrez AIBS', slug: 'decouvrez-aibs', parentId: lecoleId, order: 1 },
      { name: 'Système Qualité', slug: 'systeme-qualite', parentId: lecoleId, order: 2 },
      { name: 'Demande de document', slug: 'demande-de-document', parentId: lecoleId, order: 3 },
      { name: 'Demande de vacation', slug: 'demande-de-vacation', parentId: lecoleId, order: 4 },
      { name: 'Demande de stagiaire', slug: 'demande-de-stagiaire', parentId: lecoleId, order: 5 }
    ]).returning();

    // Insert sub-links for "Programmes"
    await db.insert(subLinks).values([
      { name: 'Undergraduate', slug: '/programs/undergraduate', parentId: programmesId, order: 1 },
      { name: 'Graduate', slug: '/programs/graduate', parentId: programmesId, order: 2 },
      { name: 'BTS', slug: '/programs/doctoral', parentId: programmesId, order: 3 }
    ]);

    // Find IDs for nested links
    const decouvrezAibsId = lecoleSubLinks.find(sub => sub.name === 'Découvrez AIBS')?.id;
    const systemeQualiteId = lecoleSubLinks.find(sub => sub.name === 'Système Qualité')?.id;

    if (!decouvrezAibsId || !systemeQualiteId) {
      throw new Error('Failed to create sub-links');
    }

    // Insert nested links for "Découvrez AIBS"
    await db.insert(nestedLinks).values([
      { name: 'Mot du PDG', slug: 'mot-du-pdg', parentId: decouvrezAibsId, order: 1 },
      { name: 'Présentation', slug: 'presentation', parentId: decouvrezAibsId, order: 2 }
    ]);

    // Insert nested links for "Système Qualité"
    await db.insert(nestedLinks).values([
      { name: 'Politique Qualité', slug: '/l-ecole/systeme-qualite/politique-qualite', parentId: systemeQualiteId, order: 1 }
    ]);

    console.log("✅ Navigation data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error);
    throw error;
  }

}

// Function to run the migration
export async function runMigration() {
  await migrateNavData();
}

// Run migration if this module is executed directly
if (require.main === module) {
  runMigration().catch(error => {
    console.error("Migration failed:", error);
    process.exit(1);
  });
}