// seeds/seedNavdata.ts
// Seed script to populate the navigation table with initial data
import { db } from "@/drizzle/db";
import { navLinks, subLinks, nestedLinks } from "@/drizzle/schema";

export async function migrateNavData() {
  try {
    // Insert main navigation links
    const mainNavs = await db.insert(navLinks).values([
      { name: "L'école", slug: '#', order: 1 },
      { name: "Programmes", slug: "#", order: 2 },
      { name: "Bibliothèque numérique", slug: "https://promo-ci.youscribe.com/pysci/lp_service_gen?utm_source=youscribe&utm_medium=others&utm_campaign=HP", order: 3 },
      { name: "E-Learning", slug: "https://myschool.atlantique-ibs.net/", order: 4 }
    ]).returning();

    // Find the IDs for our main nav items
    const lecoleId = mainNavs.find(nav => nav.name === "L'école")?.id;
    const programmesId = mainNavs.find(nav => nav.name === "Programmes")?.id;

    if (!lecoleId || !programmesId) {
      throw new Error("Failed to retrieve main navigation IDs")
    }

    // Insert sub-links for "L'école"
    const lecoleSubLinks = await db.insert(subLinks).values([
      { name: "Découvrez AIBS", slug: "#", parentId: lecoleId, order: 1 },
      { name: "Système Qualité", slug: "#", parentId: lecoleId, order: 2 },
      { name: "Demande de document", slug: "/demande-de-document", parentId: lecoleId, order: 3 },
      { name: "Demande de vacation", slug: "/demande-de-vacation", parentId: lecoleId, order: 4 },
      { name: "Demande de stagiaire", slug: "/demande-de-stagiaire", parentId: lecoleId, order: 5 }
    ]).returning();

    // Find IDs for nested links
    const decouvrezAibsId = lecoleSubLinks.find(sub => sub.name === "Découvrez AIBS")?.id;
    const systemeQualiteId = lecoleSubLinks.find(sub => sub.name === "Système Qualité")?.id;

    if (!decouvrezAibsId || !systemeQualiteId) {
      throw new Error("Failed to create sub-links");
    }

    // Insert nested links for "Découvrez AIBS"
    await db.insert(nestedLinks).values([
      { name: "Mot du PDG", slug: "/mot-du-pdg", parentId: decouvrezAibsId!, order: 1 },
      { name: "Présentation", slug: "/presentation", parentId: decouvrezAibsId!, order: 2 },
      { name: "Points forts", slug: "/points-forts", parentId: decouvrezAibsId!, order: 3 }
    ]);

    // Insert nested links for "Système Qualité"
    await db.insert(nestedLinks).values([
      { name: "Notre Politique Qualité", slug: "/notre-politique-qualite", parentId: systemeQualiteId!, order: 1 },
      { name: "Satisfaction Client", slug: "/satisfaction-client", parentId: systemeQualiteId!, order: 2 },
    ]);

    // Insert sub-links for "Programmes"
    const progSubLinks = await db.insert(subLinks).values([
      { name: "Brevet de Technicien Supérieur (BTS)", slug: "/programme/bts", parentId: programmesId, order: 1 },
      { name: "Bachelor", slug: "/programme/bachelor", parentId: programmesId, order: 2 },
      { name: "Licence de Droit", slug: "/programme/licence-de-droit", parentId: programmesId, order: 3 },
      { name: "Licence Professionnelle", slug: "/programme/licence-professionnelle", parentId: programmesId, order: 4 },
      { name: "Master Professionnel", slug: "/programme/master-professionnel", parentId: programmesId, order: 5 },
      { name: "MBA", slug: "/programme/mba", parentId: programmesId, order: 6 },
      { name: "Bourse d'étude en Chine", slug: "/programme/bourse-detude-en-chine", parentId: programmesId, order: 7 },
      { name: "VAE / VAP", slug: "/programme/vae-vap", parentId: programmesId, order: 8 }
    ]).returning();

    // Find IDs for Programme's nested links
    const btsId = progSubLinks.find(nested => nested.slug === "/programme/bts")?.id;
    const licenceproId = progSubLinks.find(nested => nested.slug === "/programme/licence-professionnelle")?.id;
    const masterproId = progSubLinks.find(nested => nested.slug === "/programme/master-professionnel")?.id;
    const mbaId = progSubLinks.find(nested => nested.slug === "/programme/mba")?.id;
    const vaevapId = progSubLinks.find(nested => nested.slug === "/programme/vae-vap")?.id;

    if (!btsId || !licenceproId || !masterproId || !mbaId || !vaevapId) {
      throw new Error("Failed to create nested links");
    }
    // Insert Programmes nested links (BTS, Licence Pro, Master Pro, MBA, VAE/VAP)
    await db.insert(nestedLinks).values([
      // BTS
      { name: "BTS Gestion Commerciale", slug: "/programme/bts-gestion-commerciale", parentId: btsId, order: 1 },
      { name: "BTS Finance Comptabilité & Gestion d'Entreprises", slug: "/programme/bts-finance-comptabilite-gestion-dentreprises", parentId: btsId, order: 2 },
      { name: "BTS Informatique: Développeur d'Application", slug: "/programme/bts-informatique-developpeur-dapplication", parentId: btsId, order: 3 },
      { name: "BTS Ressources Humaines & Communication", slug: "/programme/bts-ressources-humaines-communication", parentId: btsId, order: 4 },
      { name: "BTS Transport & Logistique", slug: "/programme/bts-transport-logistique", parentId: btsId, order: 5 },
      // Licence Pro
      { name: "Audit & Contrôle de Gestion", slug: "/programme/audit-controle-de-gestion", parentId: licenceproId, order: 1 },
      { name: "Banque & Assurance", slug: "/programme/banque-assurance", parentId: licenceproId, order: 2 },
      { name: "Gestion des Ressources Humaines", slug: "/programme/gestion-des-ressources-humaines", parentId: licenceproId, order: 3 },
      { name: "Informatique", slug: "/programme/informatique", parentId: licenceproId, order: 4 },
      { name: "Marketing - Management", slug: "/programme/marketing-management", parentId: licenceproId, order: 5 },
      { name: "Transport - Logistique", slug: "/programme/transport-logistique", parentId: licenceproId, order: 6 },
      // Master Pro
      { name: "Achats & Approvisionnements", slug: "/programme/achats-approvisionnements", parentId: masterproId, order: 1 },
      { name: "Audit & Finance d'Entreprise", slug: "/programme/audit-finance-dentreprise", parentId: masterproId, order: 2 },
      { name: "Contrôle de Gestion et Audit Organisationnel", slug: "/programme/controle-de-gestion-et-audit-organisationnel", parentId: masterproId, order: 3 },
      { name: "Management Opérationnel et Stratégique", slug: "/programme/management-operationnel-et-strategique", parentId: masterproId, order: 4 },
      { name: "Management des Projets et de l'Innovation", slug: "/programme/management-des-projets-et-de-linnovation", parentId: masterproId, order: 5 },
      { name: "Management des Ressources Humaines", slug: "/programme/management-des-ressources-humaines", parentId: masterproId, order: 6 },
      { name: "Management des Systèmes d'Informations", slug: "/programme/management-des-systemes-dinformations", parentId: masterproId, order: 7 },
      { name: "Marketing & Stratégie Digitale", slug: "/programme/marketing-strategie-digitale", parentId: masterproId, order: 8 },
      { name: "Supply Chain Management", slug: "/programme/supply-chain-management", parentId: masterproId, order: 9 },
      // MBA
      { name: "Global MBA", slug: "/programme/global-mba", parentId: mbaId, order: 1 },
      { name: "MBA Data Science & Intelligence Artificielle", slug: "/programme/mba-data-science-intelligence-artificielle", parentId: mbaId, order: 2 },
      { name: "MBA Management des Ressources Humaines", slug: "/programme/mba-management-des-ressources-humaines", parentId: mbaId, order: 3 },
      { name: "MBA Santé Sécurité Environnement", slug: "/programme/mba-sante-securite-environnement", parentId: mbaId, order: 4 },
      // VAE/VAP
      { name: "Licence", slug: "/programme/licence", parentId: vaevapId, order: 1 }
    ]);

    console.log("✅ Navigation data migration completed successfully!");
  } catch (error) {
    console.error("❌ Pages data migration failed:", error);
    throw error;
  }
}