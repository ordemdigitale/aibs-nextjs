// seeds/seedPosts.ts
// Seed script to populate the posts table with initial data
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

export async function migratePostsData() {
  try {
    // Insert posts data
    const postsData = await db.insert(posts).values([
        // Internal posts
        {
            title: "Visite D'entreprise À La Société Ciment Cote D'Ivoire (SCCI)",
            slug: "visite-dentreprise-a-la-societe-ciment-cote-divoire-scci",
            thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/actu_vignette.png",
            content: "<p>Une visite enrichissante à la Société Ciment Côte d'Ivoire (SCCI) où nos étudiants ont découvert les coulisses de l'industrie.</p>"
        },
        {
            title: "Sortie Détente À Jacqueville - Semaine D'intégration 2020",
            slug: "sortie-detente-a-jacqueville-semaine-dintegration-2020",
            thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/actu_vignette.png",
            content: "<p>Une journée mémorable à Jacqueville pour la semaine d'intégration 2020, pleine de rires et d'activités.</p>"
        },
        {
            title: "Examen TOEIC - Bachelor 2",
            slug: "examen-toeic-bachelor-2",
            thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/actu_vignette.png",
            content: "<p>Nos étudiants de Bachelor 2 ont brillamment passé l'examen TOEIC, renforçant leurs compétences linguistiques.</p>"
        },
        {
            title: "Remise De L'Homologation De Toutes Les Licences De AIBS Par Le DSUP Du Ministère De L'Enseignement Supérieur Et De La Recherche Scientifique",
            slug: "remise-de-lhomologation-de-toutes-les-licences-de-aibs-par-le-dsup-du-ministere-de-lenseignement-superieur-et-de-la-recherche-scientifique",
            thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/actu_vignette.png",
            content: "<p>Une étape importante pour AIBS avec l'homologation de toutes ses licences par le DSUP.</p>"
        },
        // External posts
        { title: "Journée sportive", link: "https://www.facebook.com/aibscotedivoire/videos/381746177827119", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/actu_vignette.png" },
        { title: "Promotion des journées informatiques", link: "https://www.facebook.com/aibscotedivoire/videos/2783666085123326s", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/actu_vignette.png" },
        { title: "Remise de présents à Madame De GHIMELLE KARABOUE et Madame YEO de AFG Holding", link: "https://www.facebook.com/story.php?story_fbid=808673558063339&id=100067621076164&mibextid=oFDknk&rdid=o5x2hHkzzsx2oPUy", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/449781144_808671761396852_6317261895696414528_n.jpg" },
        { title: "Visite du champion d'Afrique Ghislain Konan", link: "https://www.facebook.com/aibscotedivoire/posts/pfbid0hhR9JQfjedxighJi4J9g8TrW8hh2DUZFp5ULYFjAPPxpPGDTnAzx1GhSW1oZ7MC4l", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/ghislain_konan.jpg" },
        { title: "Remise de présents au Directeur Général et au Directeur des Ressources Humaines de Orange bank", link: "https://www.facebook.com/story.php?story_fbid=803268075270554&id=100067621076164&mibextid=oFDknk&rdid=C55m23cPfx6IJlV5", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/remise-orange-bank.jpg" },
        { title: "Prise en charge 100% pour la LICENCE PROFESSIONNELLE par ALTERNANCE", link: "https://www.facebook.com/photo?fbid=875242574739770&set=a.442042641393101", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/AIBS.jpg" },
        { title: "Bachelor Management International", link: "https://www.facebook.com/photo?fbid=859426886321339&set=pcb.859426926321335", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/461225044_859231566340871_234986646396457468_n.jpg" },
        { title: "Mission aux Comores", link: "https://www.facebook.com/photo?fbid=869873111943383&set=pcb.869873175276710", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/462112886_869113592019335_9037365335298982038_n.jpg", content: "<p>Une mission enrichissante aux Comores pour renforcer nos partenariats éducatifs.</p>" },
        { title: "✨ Retour sur une soirée mémorable ! Partie 1✨", link: "https://www.facebook.com/share/p/1BaVgZzshX/", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/537381029_1092727522991273_1182505101808929455_n.jpg" },
        { title: "🚀 AFG Compétences : Recruter et Former des Talents pour AFG HOLDING", link: "https://www.facebook.com/share/p/19ZMXKeSqQ/", thumbnail: "https://www.atlantique-ibs.net/media/uploads/vignettes/540960971_1098202792443746_8503474364770669941_n.jpg" },
        { title: "🎓 APPEL À CANDIDATURES — BOURSE 100% (2ᵉ cohorte)", link: "https://www.facebook.com/story.php?story_fbid=1109925347938157&id=100067621076164&rdid=0IqKgaJdmFabT57r#", thumbnail: "https://atlantique-ibs.net/media/uploads/vignettes/WhatsApp_Image_2025-09-18_%C3%A0_15.43.52_3cb3fd55.jpg" },
    ]).returning();
    console.log("✅ Posts data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration posts data migration:", error);
    throw error;        
  }
}