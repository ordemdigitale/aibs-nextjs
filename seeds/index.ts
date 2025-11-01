import { migratePagesData } from "./seedPages";
import { migratePostsData } from "./seedPosts";
import { migrateVideosData } from "./seedVideos";
import { migratePartenairesData } from "./seedPartenaires";

// Function to run the migration
export async function runMigration() {
  //await migratePagesData();
  //await migratePostsData();
  //await migrateVideosData();
  await migratePartenairesData();
  console.log("All migrations completed.");
}

// Run migration if this module is executed directly
if (require.main === module) {
  runMigration().catch(error => {
    console.error("Migration failed:", error);
    process.exit(1);
  });
}