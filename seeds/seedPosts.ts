// seeds/seedPosts.ts
// Seed script to populate the posts table with initial data
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

export async function migratePostsData() {
    try {
        // Insert posts data
        const postsData = await db.insert(posts).values([
            { title: "🎓 APPEL À CANDIDATURES — BOURSE 100% (2ᵉ cohorte)", thumbnail: "https://atlantique-ibs.net/media/uploads/vignettes/WhatsApp_Image_2025-09-18_%C3%A0_15.43.52_3cb3fd55.jpg", link: "https://www.facebook.com/story.php?story_fbid=1109925347938157&id=100067621076164&rdid=0IqKgaJdmFabT57r#" },
            { title: "🚀 AFG Compétences : Recruter et Former des Talents pour AFG HOLDING ", thumbnail: "https://atlantique-ibs.net/media/uploads/vignettes/540960971_1098202792443746_8503474364770669941_n.jpg", link: "https://www.facebook.com/story.php?story_fbid=1098202822443743&id=100067621076164&rdid=m6M6iPj1yRH1EtN9#" },
            { title: "✨ Retour sur une soirée mémorable ! Partie 1✨", thumbnail: "https://atlantique-ibs.net/media/uploads/vignettes/537381029_1092727522991273_1182505101808929455_n.jpg", link: "https://www.facebook.com/story.php?story_fbid=1092728159657876&id=100067621076164&rdid=vd49nroih3Dzm9qF#" },
        ]).returning();
        console.log("✅ Posts data migration completed successfully!");
    } catch (error) {
        console.error("Error during migration posts data migration:", error);
        throw error;        
    }
}